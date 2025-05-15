import { PrismaService } from '../src/database/prisma.service';
import fs from 'fs';
const prisma = new PrismaService();

const main = async () => {
  const data: any = await fs.readFileSync('mock/english.txt', 'utf-8');
  const rows = data.split('\n')?.filter((dt) => dt);
  await prisma.$transaction(
    async (tx: PrismaService) => {
      const word = rows.map((entrie) => ({ entrie }));
      await tx.entries.createMany({
        data: word,
        skipDuplicates: true,
      });
    },
    { timeout: 300000000 },
  );
};
main();
