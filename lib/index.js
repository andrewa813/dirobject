(function() {
  var glob, path;

  glob = require('glob');

  path = require('path');

  module.exports = function(dir, mapper) {
    var container, file, fileModule, files, i, index, j, lastObject, len, len1, skips, token, tokens;
    container = {};
    skips = dir.split(/[\\\/]+/).length;
    files = glob.sync(dir + "/**/*.{js,json,coffee}");
    for (i = 0, len = files.length; i < len; i++) {
      file = files[i];
      console.log(file);
      lastObject = container;
      file = file.substring(0, file.lastIndexOf('.'));
      tokens = file.split(/[\\\/]+/);
      for (index = j = 0, len1 = tokens.length; j < len1; index = ++j) {
        token = tokens[index];
        if (index < skips) {
          continue;
        }
        if (index === skips && token === 'index') {
          continue;
        }
        if (index !== tokens.length - 1) {
          lastObject = lastObject[token] != null ? lastObject[token] : lastObject[token] = {};
          continue;
        }
        file = path.resolve(file);
        fileModule = require(file);
        lastObject[token] = mapper ? mapper(fileModule) : fileModule;
      }
    }
    return container;
  };

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtBQUFBLE1BQUE7O0VBQUEsSUFBQSxHQUFPLE9BQUEsQ0FBUSxNQUFSOztFQUNQLElBQUEsR0FBTyxPQUFBLENBQVEsTUFBUjs7RUFFUCxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFDLEdBQUQsRUFBTSxNQUFOO0FBRWhCLFFBQUE7SUFBQSxTQUFBLEdBQVk7SUFDWixLQUFBLEdBQVEsR0FBRyxDQUFDLEtBQUosQ0FBVSxTQUFWLENBQW9CLENBQUM7SUFDN0IsS0FBQSxHQUFRLElBQUksQ0FBQyxJQUFMLENBQWEsR0FBRCxHQUFLLHdCQUFqQjtBQUVSLFNBQUEsdUNBQUE7O01BQ0MsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaO01BQ0EsVUFBQSxHQUFhO01BQ2IsSUFBQSxHQUFPLElBQUksQ0FBQyxTQUFMLENBQWUsQ0FBZixFQUFrQixJQUFJLENBQUMsV0FBTCxDQUFpQixHQUFqQixDQUFsQjtNQUNQLE1BQUEsR0FBUyxJQUFJLENBQUMsS0FBTCxDQUFXLFNBQVg7QUFFVCxXQUFBLDBEQUFBOztRQUNDLElBQVksS0FBQSxHQUFRLEtBQXBCO0FBQUEsbUJBQUE7O1FBQ0EsSUFBWSxLQUFBLEtBQVMsS0FBVCxJQUFtQixLQUFBLEtBQVMsT0FBeEM7QUFBQSxtQkFBQTs7UUFFQSxJQUFPLEtBQUEsS0FBUyxNQUFNLENBQUMsTUFBUCxHQUFnQixDQUFoQztVQUNDLFVBQUEsK0JBQWEsVUFBVyxDQUFBLEtBQUEsSUFBWCxVQUFXLENBQUEsS0FBQSxJQUFVO0FBQ2xDLG1CQUZEOztRQUlBLElBQUEsR0FBTyxJQUFJLENBQUMsT0FBTCxDQUFhLElBQWI7UUFDUCxVQUFBLEdBQWEsT0FBQSxDQUFRLElBQVI7UUFDYixVQUFXLENBQUEsS0FBQSxDQUFYLEdBQXVCLE1BQUgsR0FBZSxNQUFBLENBQU8sVUFBUCxDQUFmLEdBQXNDO0FBVjNEO0FBTkQ7QUFrQkEsV0FBTztFQXhCUztBQUhqQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5nbG9iID0gcmVxdWlyZSAnZ2xvYidcclxucGF0aCA9IHJlcXVpcmUgJ3BhdGgnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IChkaXIsIG1hcHBlcikgLT5cclxuXHJcblx0Y29udGFpbmVyID0ge31cclxuXHRza2lwcyA9IGRpci5zcGxpdCgvW1xcXFxcXC9dKy8pLmxlbmd0aFxyXG5cdGZpbGVzID0gZ2xvYi5zeW5jIFwiI3tkaXJ9LyoqLyoue2pzLGpzb24sY29mZmVlfVwiXHJcblxyXG5cdGZvciBmaWxlIGluIGZpbGVzXHJcblx0XHRjb25zb2xlLmxvZyBmaWxlXHJcblx0XHRsYXN0T2JqZWN0ID0gY29udGFpbmVyXHJcblx0XHRmaWxlID0gZmlsZS5zdWJzdHJpbmcgMCwgZmlsZS5sYXN0SW5kZXhPZignLicpXHJcblx0XHR0b2tlbnMgPSBmaWxlLnNwbGl0IC9bXFxcXFxcL10rL1xyXG5cclxuXHRcdGZvciB0b2tlbiwgaW5kZXggaW4gdG9rZW5zXHJcblx0XHRcdGNvbnRpbnVlIGlmIGluZGV4IDwgc2tpcHNcclxuXHRcdFx0Y29udGludWUgaWYgaW5kZXggaXMgc2tpcHMgYW5kIHRva2VuIGlzICdpbmRleCdcclxuXHJcblx0XHRcdHVubGVzcyBpbmRleCBpcyB0b2tlbnMubGVuZ3RoIC0gMVxyXG5cdFx0XHRcdGxhc3RPYmplY3QgPSBsYXN0T2JqZWN0W3Rva2VuXSA/PSB7fVxyXG5cdFx0XHRcdGNvbnRpbnVlXHJcblxyXG5cdFx0XHRmaWxlID0gcGF0aC5yZXNvbHZlIGZpbGVcclxuXHRcdFx0ZmlsZU1vZHVsZSA9IHJlcXVpcmUgZmlsZVxyXG5cdFx0XHRsYXN0T2JqZWN0W3Rva2VuXSA9IGlmIG1hcHBlciB0aGVuIG1hcHBlciBmaWxlTW9kdWxlIGVsc2UgZmlsZU1vZHVsZVxyXG5cclxuXHRyZXR1cm4gY29udGFpbmVyXHJcbiJdfQ==
