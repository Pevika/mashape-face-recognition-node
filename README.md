# mashape-face-recognition-node
Mashape Face Recognition for NodeJS

## How to use

`npm install mashape-face-recognition`

```
var FaceRecognition = require("mashape-face-recognition");

var faceRecognition = new FaceRecognition("MY_API_KEY");
faceRecognition.detect("http://test.com/image1.png", function (error, response, body) {

});
faceRecognition.detect(["http://test.com/image2.png", "http://test.com/image3.png"], function (error, response, body) {

});
```

For the rest, please refer to the documentation on the website: https://www.mashape.com/lambda/face-recognition#detect


## License

The MIT License (MIT)

Copyright (c) 2015 Geoffrey Bauduin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.