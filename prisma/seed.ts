import { PrismaClient } from '@/app/generated/prisma/client';
import {PrismaNeon } from "@prisma/adapter-neon"
import { Role } from '@prisma/client';
import bcrypt from 'bcryptjs'

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log('Starting database seed...')

  // Create admin user
  const adminPassword = await bcrypt.hash('Admin@123456', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@jmo.com' },
    update: {},
    create: {
      email: 'admin@jmo.com',
      name: 'Admin User',
      password: adminPassword,
      role: Role.ADMIN,
    },
  })

  console.log('Admin user created')

  // Create sample creator
  const creatorPassword = await bcrypt.hash('Creator@123456', 12)
  
  const creator = await prisma.user.create({
    data: {
      email: 'creator@jmo.com',
      name: 'Sample Creator',
      password: creatorPassword,
      role: Role.CREATOR,
      country: 'Nigeria',
    },
  })

  console.log('Creator user created')

  // Create creator profile
  const profile = await prisma.creatorProfile.create({
    data: {
      brandName: 'Tech Innovations Ltd',
      creatorType: 'PRODUCT',
      category: 'Technology',
      cacDocument: 'CAC/123456',
      trialEndsAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      userId: creator.id,
    },
  })

  console.log('Creator profile created')

  // Create sample products
  await prisma.product.createMany({
    data: [
      {
        title: 'Premium Software License',
        description: 'Advanced software solution for business automation',
        price: 9999.99,
        creatorId: profile.id,
      },
      {
        title: 'Mobile App Development Kit',
        description: 'Complete toolkit for cross-platform mobile development',
        price: 4999.99,
        creatorId: profile.id,
      },
    ],
  })

  console.log(' Sample products created')

  // Create sample articles
  const articles = await prisma.article.createMany({
    data: [
      {
        title: 'The Future of Digital Innovation in Africa',
        slug: 'future-digital-innovation-africa', 
        content: `
          Africa is experiencing a digital revolution that is transforming businesses and lives.
          The continent has enormous potential for growth and innovation across multiple sectors.
          From fintech to healthcare, African entrepreneurs are leading the way in creating
          solutions that address local challenges with global impact.
        `,
        excerpt: 'Exploring digital innovation opportunities across Africa',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        authorId: admin.id,
      },
      {
        title: 'Building Sustainable Business Models',
        slug: 'building-sustainable-business-models',
        content: `
          Sustainability is no longer a buzzword—it's essential for long-term business success.
          Companies that prioritize environmental and social responsibility are seeing better
          customer loyalty, employee engagement, and financial performance.
        `,
        excerpt: 'How to build businesses that matter',
        status: 'PUBLISHED',
        publishedAt: new Date(),
        authorId: admin.id,
      },
    ],
  })

  console.log(' Sample articles created')

  console.log(' Database seed completed successfully!')
  console.log('\n Default Credentials:')
  console.log('Admin Email: admin@jmo.com | Password: Admin@123456')
  console.log('Creator Email: creator@jmo.com | Password: Creator@123456')
}

main()
  .catch((error) => {
    console.error('Seed error:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })