function init() {
    tracker = initTracker("#example");
    tracking.track("#example .drone", tracker);
}

function initTracker(element) {
    // Initialise a color tracker
    var tracker = new tracking.ColorTracker();
    TrackerUtils.addTrackingColor("#63A75E", "green", tracker);
    TrackerUtils.addTrackingColor("#5EA24E", "green", tracker);
    TrackerUtils.addTrackingColor("#57AE78", "green", tracker);
    TrackerUtils.addTrackingColor("#CC7E86", "light red", tracker);
    TrackerUtils.addTrackingColor("#C4767C", "light red", tracker);
    TrackerUtils.addTrackingColor("#B04D3F", "red", tracker);
    TrackerUtils.addTrackingColor("#A54F4C", "red", tracker);
    TrackerUtils.addTrackingColor("#333A35", "black", tracker);
    TrackerUtils.addTrackingColor("#4C5851", "black", tracker);
    TrackerUtils.addTrackingColor("#74727C", "grey", tracker);
    TrackerUtils.addTrackingColor("#A9A8B6", "grey", tracker);
    TrackerUtils.addTrackingColor("#787882", "grey", tracker);
    TrackerUtils.addTrackingColor("#A6A6B1", "grey", tracker);
    TrackerUtils.addTrackingColor("#BCC0C2", "white", tracker);
    TrackerUtils.addTrackingColor("#B9BBB8", "white", tracker);
    TrackerUtils.addTrackingColor("#B8B9BE", "white", tracker);
    TrackerUtils.addTrackingColor("#C1BAA9", "white", tracker);
    TrackerUtils.startTrackingColors(tracker);
    // Whenever there is a new color detected, mark them
    tracker.on('track', function(event) {
        console.log(event.data);
        markColors(event.data, element);
    });

    return tracker;
}

function writeRectangle(rect) {
    jQuery(".output").append("<br />");
    jQuery(".output").append(rect.color + ": " + rect.x + ", " + rect.y);
}

function markColors(colors, element) {
    var canvas = $(element + ' .canvas').get(0);
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, context.width, context.height);

    for (var i = 0; i < colors.length; i++) {
        drawRectangle(colors[i], context);
    }
}

function drawRectangle(rect, context) {
    context.strokeStyle = rect.color;
    context.strokeRect(rect.x, rect.y, rect.width, rect.height);

    console.log(rect);
    writeRectangle(rect);
}

window.addEventListener("load", init);