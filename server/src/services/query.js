const DEFAULT_PAGE_LIMIT = 0;

function getPagination(query) {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || DEFAULT_PAGE_LIMIT;
  const skip = (page - 1) * limit;
  return { limit, skip };
}

module.exports = getPagination;
