const express = require('express');
const app = module.exports = require('express')();

const router = express.Router();

const helper = require('../../helper'),
  filter = helper.filter

const resources = require('../../resources');
const thumbnailResource = resources.thumbnail.thumbnail;

const controllers = require('../../controllers');
const thumbnailController = controllers.thumbnail.thumbnail;

router.route('/createThumbnail')
  .post(filter.authFilter, thumbnailResource.createThumbnailResource, thumbnailController.createThumbnailController)

app.use('/', router)