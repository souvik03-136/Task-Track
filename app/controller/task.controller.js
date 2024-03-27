const Task = require("../models/Task");

function index(req, res) {
	Task.find()
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving tasks.",
			});
		});
}

function create(req, res) {
	const { owner, email, title, sourceLink, description, tags } = req.body;
	const task = new Task({
		owner,
		email,
		title,
		sourceLink,
		description,
		tags,
	});
	task.save()
		.then((data) => {
			res.status(201).json("Task created successfully");
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Task.",
			});
		});
}

function update(req, res) {
	const id = req.params.id;
	Task.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
		(data) => {
			if (!data) {
				return res.status(404).send({
					message: `Cannot update Task with id=${id}. Maybe Task was not found!`,
				});
			} else {
				res.status(200).send({
					message: "Task was updated successfully.",
				});
			}
		}
	);
}

function destroy(req, res) {
	const id = req.params.id;
	Task.deleteOne({ _id: id }).then((data) => {
		if (!data) {
			return res.status(404).send({
				message: `Cannot delete Task with id=${id}. Maybe Task was not found!`,
			});
		} else {
			res.status(200).send({
				message: "Task was deleted successfully.",
			});
		}
	});
}

function deleteAll(req, res) {
	Task.deleteMany({}).then((data) => {
		res.status(200).send({
			message: `${data.deletedCount} Tasks were deleted successfully!`,
		});
	});
}

module.exports = { index, create, update, destroy, deleteAll };
