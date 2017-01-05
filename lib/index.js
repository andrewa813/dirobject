(function() {
  var glob;

  glob = require('glob');

  module.exports = function(dir, mapper) {
    var container, file, fileModule, files, i, index, j, lastObject, len, len1, skips, token, tokens;
    container = {};
    skips = dir.split(/[\\\/]+/).length;
    files = glob.sync(dir + "/**/*.{js,json,coffee}", {});
    for (i = 0, len = files.length; i < len; i++) {
      file = files[i];
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtBQUFBLE1BQUE7O0VBQUEsSUFBQSxHQUFPLE9BQUEsQ0FBUSxNQUFSOztFQUVQLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUMsR0FBRCxFQUFNLE1BQU47QUFFaEIsUUFBQTtJQUFBLFNBQUEsR0FBWTtJQUNaLEtBQUEsR0FBUSxHQUFHLENBQUMsS0FBSixDQUFVLFNBQVYsQ0FBb0IsQ0FBQztJQUM3QixLQUFBLEdBQVEsSUFBSSxDQUFDLElBQUwsQ0FBYSxHQUFELEdBQUssd0JBQWpCLEVBQTBDLEVBQTFDO0FBRVIsU0FBQSx1Q0FBQTs7TUFDQyxVQUFBLEdBQWE7TUFDYixJQUFBLEdBQU8sSUFBSSxDQUFDLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLElBQUksQ0FBQyxXQUFMLENBQWlCLEdBQWpCLENBQWxCO01BQ1AsTUFBQSxHQUFTLElBQUksQ0FBQyxLQUFMLENBQVcsU0FBWDtBQUVULFdBQUEsMERBQUE7O1FBQ0MsSUFBWSxLQUFBLEdBQVEsS0FBcEI7QUFBQSxtQkFBQTs7UUFDQSxJQUFZLEtBQUEsS0FBUyxLQUFULElBQW1CLEtBQUEsS0FBUyxPQUF4QztBQUFBLG1CQUFBOztRQUVBLElBQU8sS0FBQSxLQUFTLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLENBQWhDO1VBQ0MsVUFBQSwrQkFBYSxVQUFXLENBQUEsS0FBQSxJQUFYLFVBQVcsQ0FBQSxLQUFBLElBQVU7QUFDbEMsbUJBRkQ7O1FBSUEsSUFBQSxHQUFPLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBYjtRQUNQLFVBQUEsR0FBYSxPQUFBLENBQVEsSUFBUjtRQUNiLFVBQVcsQ0FBQSxLQUFBLENBQVgsR0FBdUIsTUFBSCxHQUFlLE1BQUEsQ0FBTyxVQUFQLENBQWYsR0FBc0M7QUFWM0Q7QUFMRDtBQWlCQSxXQUFPO0VBdkJTO0FBRmpCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmdsb2IgPSByZXF1aXJlICdnbG9iJ1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZGlyLCBtYXBwZXIpIC0+XHJcblxyXG5cdGNvbnRhaW5lciA9IHt9XHJcblx0c2tpcHMgPSBkaXIuc3BsaXQoL1tcXFxcXFwvXSsvKS5sZW5ndGhcclxuXHRmaWxlcyA9IGdsb2Iuc3luYyBcIiN7ZGlyfS8qKi8qLntqcyxqc29uLGNvZmZlZX1cIiwge31cclxuXHJcblx0Zm9yIGZpbGUgaW4gZmlsZXNcclxuXHRcdGxhc3RPYmplY3QgPSBjb250YWluZXJcclxuXHRcdGZpbGUgPSBmaWxlLnN1YnN0cmluZyAwLCBmaWxlLmxhc3RJbmRleE9mKCcuJylcclxuXHRcdHRva2VucyA9IGZpbGUuc3BsaXQgL1tcXFxcXFwvXSsvXHJcblxyXG5cdFx0Zm9yIHRva2VuLCBpbmRleCBpbiB0b2tlbnNcclxuXHRcdFx0Y29udGludWUgaWYgaW5kZXggPCBza2lwc1xyXG5cdFx0XHRjb250aW51ZSBpZiBpbmRleCBpcyBza2lwcyBhbmQgdG9rZW4gaXMgJ2luZGV4J1xyXG5cclxuXHRcdFx0dW5sZXNzIGluZGV4IGlzIHRva2Vucy5sZW5ndGggLSAxXHJcblx0XHRcdFx0bGFzdE9iamVjdCA9IGxhc3RPYmplY3RbdG9rZW5dID89IHt9XHJcblx0XHRcdFx0Y29udGludWVcclxuXHJcblx0XHRcdGZpbGUgPSBwYXRoLnJlc29sdmUgZmlsZVxyXG5cdFx0XHRmaWxlTW9kdWxlID0gcmVxdWlyZSBmaWxlXHJcblx0XHRcdGxhc3RPYmplY3RbdG9rZW5dID0gaWYgbWFwcGVyIHRoZW4gbWFwcGVyIGZpbGVNb2R1bGUgZWxzZSBmaWxlTW9kdWxlXHJcblxyXG5cdHJldHVybiBjb250YWluZXJcclxuIl19
