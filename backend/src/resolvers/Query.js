function feed(parent, args, context, info) {
  return context.prisma.stats();
}

module.exports = {
  feed
};
