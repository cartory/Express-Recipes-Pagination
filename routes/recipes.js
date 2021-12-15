var recipes = require("../recipes.json");
var router = require("express").Router();

router.get("/", (req, res) => {
	let { page = 1, limit = 3 } = req.query;
	
	page = Number.parseInt(page);
	limit = Number.parseInt(limit);
	
	const _recipes = JSON.parse(JSON.stringify(recipes));

	if (isNaN(page)) {
		return res.json(isNaN(limit) ? recipes : _recipes.slice(0, limit));
	}

	const start = (page - 1) * limit;

	return res.json(_recipes.slice(start, start + limit));
});

module.exports = router;
