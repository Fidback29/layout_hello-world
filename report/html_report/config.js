report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document.png",
        "test": "..\\bitmaps_test\\20251029-125838\\Entire_document.png",
        "selector": "document",
        "fileName": "Entire_document.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://127.0.0.1:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions",
        "expect": 0,
        "viewportLabel": "custom-size",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -1363
          },
          "rawMisMatchPercentage": 0.24203821656050956,
          "misMatchPercentage": "0.24",
          "analysisTime": 11
        }
      },
      "status": "pass"
    }
  ]
});