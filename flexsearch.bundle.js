

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Example with FlexSearch from DigitalOcean</title>
  <!-- Include FlexSearch from DigitalOcean Space -->
  <script src="https://layer8techs.nyc3.digitaloceanspaces.com/flexsearch.bundle.js"></script>
</head>
<body>
  <h1>Search Example</h1>
  <div id="searchResults"></div>

  <!-- Custom Script that uses FlexSearch -->
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      // Initialize FlexSearch index
      const index = new FlexSearch({
        encode: "icase",
        tokenize: "full",
        threshold: 1,
      });

      // Add data to the index
      index.add(1, "Some content to index for search");
      index.add(2, "Another piece of content to index");

      // Perform a search
      const results = index.search("content");

      // Display results
      document.getElementById('searchResults').innerText = `Search Results: ${results}`;
    });
  </script>
</body>
</html>
