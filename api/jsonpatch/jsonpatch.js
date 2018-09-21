const express = require('express');
const app = module.exports = require('express')();

const router = express.Router();

const helper = require('../../helper'),
  filter = helper.filter

const resources = require('../../resources');
const jsonPatchResource = resources.jsonpatch.jsonpatch;

const controllers = require('../../controllers');
const jsonPatchController = controllers.jsonpatch.jsonpatch;

router.route('/jsonpatching')
  .post(filter.authFilter, jsonPatchResource.jsonPatchingResource, jsonPatchController.jsonPatchingController)

app.use('/', router)