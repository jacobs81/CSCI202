var stand = function (any) {
    any.setup = function () {
        any.createCanvas(500, 500);
        any.rectMode(any.CENTER);
    };

    any.draw = function () {
        any.strokeWeight(0.5);
        var middleX = any.width / 2;
        var middleY = any.height / 2;
        any.background(200);
        any.fill(169, 169, 169)
        any.rect(middleX, middleY, any.width, any.height)

        // Tan Triangle
        any.fill(255, 255, 153);
        any.triangle(0, middleY, middleX - .10 * any.width, middleY, 0, any.height);

        // Two light Gray Triangles
        any.fill(224, 224, 224);
        // Upper
        any.triangle(middleX - .10 * any.width, middleY + .10 * any.height, middleX - .10 * any.width, -55, any.width, middleY);
        // Lower
        any.triangle(middleX - .10 * any.width, any.height + 50, -5, any.height, middleX - .10 * any.width, middleY);

        // Red Triangle
        any.fill(255, 0, 0);
        any.triangle(any.width, -5, middleX - .10 * any.width, middleY + .10 * any.height, any.width, any.height + .15 * any.height);

        // Black Triangle
        any.fill(0, 0, 0);
        any.triangle(middleX - .10 * any.width, -10, middleX - .10 * any.width, any.height - 10, -50, middleY);
    };
};

var myp5 = new p5(stand, "standard");

var test1, test2, test3, test4, test5, test6, test7;
test1 = test2 = test3 = test4 = test5 = test6 = test7 = 169;

var animation = function (any) {
    var startTime;

    any.setup = function () {
        any.createCanvas(500, 500);
        any.rectMode(any.CENTER);
        startTime = any.millis(); // Record the start time
    };

    any.draw = function () {
        any.strokeWeight(0);
        var middleX = any.width / 2;
        var middleY = any.height / 2;
        any.background(200);
        any.fill(169, 169, 169)
        any.rect(middleX, middleY, any.width, any.height);

        var elapsedTime = any.millis() - startTime;
        if (elapsedTime > 12000) {
            startTime = any.millis();
            test1 = test2 = test3 = test4 = test5 = test6 = test7 = 169;
        }

        // Tan Triangle
        if (test1 == 255 & test2 == 153) {
            any.strokeWeight(0.5);
        }
        if (test1 < 255) {
            test1 = test1 + 1;
        }
        if (test2 > 153) {
            test2 = test2 - 1;
        }
        any.fill(test1, test1, test2);
        any.triangle(0, middleY, middleX - 0.10 * any.width, middleY, 0, any.height);

        if (elapsedTime > 2000) {
            // Two light Gray Triangles
            if (test3 == 224) {
                any.strokeWeight(0.5);
            } else {
                any.strokeWeight(0);
            }
            if (test3 < 224) {
                test3 = test3 + 1;
            }
            any.fill(test3, test3, test3);
            // Upper
            any.triangle(middleX - 0.10 * any.width, middleY + 0.10 * any.height, middleX - 0.10 * any.width, -55, any.width, middleY);

            if (elapsedTime > 4000) {
                // Lower
                if (test4 == 224) {
                    any.strokeWeight(0.5);
                } else {
                    any.strokeWeight(0);
                }
                if (test4 < 224) {
                    test4 = test4 + 1;
                }
                any.fill(test4, test4, test4);
                any.triangle(middleX - 0.10 * any.width, any.height + 50, -5, any.height, middleX - 0.10 * any.width, middleY);

                if (elapsedTime > 6000) {
                    // Red Triangle
                    if (test5 == 255 & test6 == 0) {
                        any.strokeWeight(0.5);
                    } else {
                        any.strokeWeight(0);
                    }
                    if (test5 < 255) {
                        test5 = test5 + 1;
                    }
                    if (test6 > 0) {
                        test6 = test6 - 1;
                    }
                    any.fill(test5, test6, test6);
                    any.triangle(any.width, -5, middleX - 0.10 * any.width, middleY + 0.10 * any.height, any.width, any.height + 0.15 * any.height);

                    if (elapsedTime > 8000) {
                        // Black Triangle
                        if (test7 == 0) {
                            any.strokeWeight(0.5);
                        } else {
                            any.strokeWeight(0);
                        }
                        if (test7 > 0) {
                            test7 = test7 - 1;
                        }
                        any.fill(test7, test7, test7)
                        any.triangle(middleX - 0.10 * any.width, -10, middleX - 0.10 * any.width, any.height - 10, -50, middleY);
                    }
                }
            }
        }
    };
};

var myp5 = new p5(animation, "animation");
