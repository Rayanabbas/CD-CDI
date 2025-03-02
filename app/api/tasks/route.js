import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const tasks = await prisma.task.findMany();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la récupération des tâches' });
  }
}

export async function POST(req, res) {
  try {
    const { name, description } = await req.json();
    const newTask = await prisma.task.create({
      data: { name, description },
    });
    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la création de la tâche' });
  }
}

export async function DELETE(req, res) {
  try {
    const { id } = await req.json();
    await prisma.task.delete({ where: { id: Number(id) } });
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: 'Erreur lors de la suppression de la tâche' });
  }
}
