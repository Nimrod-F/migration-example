const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-config');
const Person = require('../models/person_table')(sequelize, DataTypes);

module.exports = {
    create(req, res) {
        const { body } = req;
        return Person.create({
            name: body.name
        }).then(person => res.status(201)
            .send({
                success: true,
                message: "Successfully created a person entity.",
                person
            }))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return Person.findAll()
            .then(persons => res.status(200).send(persons))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return Person.findByPk(req.params.personId)
            .then(person => {
                if (!person) {
                    return res.status(404).send({
                        message: "Person Not Found"
                    });
                }
                return res.status(200).send(person);
            })
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return Person.findByPk(req.params.personId)
            .then(person => {
                if (!person) {
                    return res.status(404).send({
                        message: "Person Not Found"
                    });
                }
                return person
                    .update(req.body)
                    .then(() => res.status(200).send(person))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    delete(req, res) {
        return Person.findByPk(req.params.personId)
            .then(person => {
                if (!person) {
                    return res.status(400).send({
                        message: "Person Not Found"
                    });
                }
                return person
                    .destroy()
                    .then(() =>
                        res.status(204).send({ message: "Successfully deleted the person!" })
                    )
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
}