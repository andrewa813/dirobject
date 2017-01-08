
glob = require 'glob'
path = require 'path'

module.exports = (dir, mapper) ->

	container = {}
	skips = dir.split(/[\\\/]+/).length
	files = glob.sync "#{dir}/**/*.{js,json,coffee}"

	for file in files
		console.log file
		lastObject = container
		file = file.substring 0, file.lastIndexOf('.')
		tokens = file.split /[\\\/]+/

		for token, index in tokens
			continue if index < skips
			continue if index is skips and token is 'index'

			unless index is tokens.length - 1
				lastObject = lastObject[token] ?= {}
				continue

			file = path.resolve file
			fileModule = require file
			lastObject[token] = if mapper then mapper fileModule else fileModule

	return container
