<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video Search....</title>
  <!-- Semantics CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
  <!-- My stylesheet -->
  <link rel="stylesheet" href="stylesheet1.css">
</head>

<body>
  <!-- When user clicks on the "Videos" link, there will be 3 randomly generated YouTube videos already populated, 
      but when the user puts in a key word and presses "Enter", the videos will be replaced by relevant articles  -->

  <!-- Side bar that pops up when hamburger is clicked -->
  <div class="ui vertical inverted sidebar menu">
    <a class="item" href="../index.html">Home</a>
    <a class="item" href="news.html">News</a>
    <a class="active item">Videos</a>
  </div>

  <div class="ui inverted vertical masthead center aligned segment" id="top">
    <div class="ui container">
      <div class="ui large secondary inverted pointing menu">
        <a class="toc item" id="hamburger">
          <i class="sidebar icon"></i>
        </a>
        <a class="item" href="../index.html">Home</a>
        <a class="item" href="news.html">News</a>
        <a class="active item">Videos</a>
      </div>
    </div>
  </div>

  <div class="ui text container center aligned" id="videosSearch-Container">
    <h1 class="ui inverted header center aligned">
      Search for Videos about Your Favorite Games!
    </h1>
    <div class="ui center aligned category search">
      <div class="ui icon input center aligned">
        <input id="userInput" class="prompt" type="text" placeholder="Start the journey...">
        <i class="search icon"></i>
      </div>
    </div>
  </div>

  <!-- the div that will hold all the cards with the news search results -->
  <div class="ui inverted vertical center aligned segment" id="video-container">
    <!-- contaier for videos -->
    <div class="ui fluid container" id="videoOuter">
      <div class="ui basic segment" id="video-Content"></div>
    </div>
  </div>


</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"></script>
<script src='../Javascript/config.js'></script>
<script src="../Javascript/videos.js"></script>
<script src='../Javascript/scriptSemanticUi.js'></script>



</html>
