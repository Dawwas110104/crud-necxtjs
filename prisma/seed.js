const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const usersData = [
    { username: 'admin@mail.io', password: 'admin' },
    { username: 'user1@mail.io', password: 'user1' },
    { username: 'user2@mail.io', password: 'user2' }
  ];
  
  for (const user of usersData) {
    await prisma.users.upsert({
      where: { username: user.username },
      update: {},
      create: user,
    });
  }

  const typesData = [
    { name: 'LH' },
    { name: 'RH' },
    { name: 'ABS LH' },
    { name: 'ABS RH' },
    { name: 'CENTER' },
    { name: 'FRONT' },
    { name: 'REAR' },
    { name: 'CENTER LH' },
    { name: 'CENTER RH' },
    { name: 'FRONT LH' },
    { name: 'FRONT RH' },
    { name: 'REAR LH' },
    { name: 'REAR RH' },
    { name: 'NO. 1' },
    { name: 'NO. 2' },
  ]

  for (const type of typesData) {
    await prisma.type.upsert({
      where: { name: type.name },
      update: {},
      create: type,
    });
  }

  const groupsData = [
    { name: "CYL" },
    { name: "ENG" },
    { name: "PT" },
    { name: "PPM" },
    { name: "OTH" }
  ]

  for (const group of groupsData) {
    await prisma.group.upsert({
      where: { name: group.name },
      update: {},
      create: group,
    });
  }

  console.log("sukses!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
