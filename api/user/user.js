const express = require('express');
const app = module.exports = require('express')();

const router = express.Router();

const helper = require('../../helper'),
	filter = helper.filter;

const resources = require('../../resources'),
	userResource = resources.user.user;

const controllers = require('../../controllers'),
	userController = controllers.user.user;

router.route('/login')
  .post(filter.notLoggedInFilterAdmin, userResource.loginResource, userController.loginController)

app.use('/', router)