function formatNumber(value) {
  return ((parseInt(value) > 9) ? value : '0'+value)
}

function setMilliseconds(value) {
  var formatted = formatNumber(value);
  $('aside[data-module="game-clock"] .clock-milliseconds').text(formatted);
}

function setSeconds(value) {
  var formatted = formatNumber(value);
  $('aside[data-module="game-clock"] .clock-seconds').text(formatted);
}

function setMinutes(value) {
  var formatted = formatNumber(value);
  $('aside[data-module="game-clock"] .clock-minutes').text(formatted);
}

function setHours(value) {
  var formatted = formatNumber(value);
  $('aside[data-module="game-clock"] .clock-hours').text(formatted);
}

function getMilli() {
  return $('aside[data-module="game-clock"] .clock-milliseconds').text();
}

function getSeconds() {
  return $('aside[data-module="game-clock"] .clock-seconds').text();
}

function getMinutes() {
  return $('aside[data-module="game-clock"] .clock-minutes').text();
}

function getHours() {
  return $('aside[data-module="game-clock"] .clock-hours').text();
}

// Interval for coutdown
setInterval( function() {
  var milli = getMilli();
  var new_milli = parseInt(milli) - 1;

  if (new_milli < 0) {
    var seconds = getSeconds();
    if (parseInt(seconds) > 0) {
      setMilliseconds('99');
    } else {
      setMilliseconds('0');
    }
    var new_seconds = parseInt(seconds) - 1;
    if (new_seconds < 0) {
      var minutes = getMinutes();
      if (parseInt(minutes) > 0) {
        setSeconds('59');
      } else {
        setSeconds('0');
      }
      var new_minutes = parseInt(minutes) - 1;
      if (new_minutes < 0) {
        var hours = getHours();
        if (parseInt(hours) > 0) {
          setMinutes('59');
        } else {
          setMinutes('0');
        }
        var new_hours = parseInt(hours) - 1;
        if (new_hours < 0) {
          setHours(0);
        } else {
          setHours(new_hours);
        }
      } else {
        setMinutes(new_minutes);
      }
    } else {
      setSeconds(new_seconds);
    }
  } else {
    setMilliseconds(new_milli);
  }
}, 10);