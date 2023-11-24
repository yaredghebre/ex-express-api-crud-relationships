const prisma = require("../library/PrismaClient");
// const slugify = require("slugify");

async function store(req, res) {
  const addData = req.body;

  const newCategory = await prisma.category.create({
    data: {
      name: addData.name,
      slug: addData.slug,
      posts: {
        connect: addData.posts.map((post) => ({ id: post })),
      },
    },
  });

  return res.json(newCategory);
}

module.exports = {
  store,
};
