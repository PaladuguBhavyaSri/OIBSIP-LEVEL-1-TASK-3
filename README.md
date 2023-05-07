# OIBSIP-LEVEL-1-TASK-3

HTML main.html
<!DOCTYPE html>
<html>

<head>
    <title>Temperature Converter</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <div class="container">
        <h1>Temperature Converter</h1>
        <form>
            <label for="temperature">Enter temperature:</label>
            <input type="text" id="temperature" placeholder="Enter temperature" required>

            <label for="unit">Select unit:</label>
            <select id="unit">
				<option value="Celsius">Celsius</option>
				<option value="Fahrenheit">Fahrenheit</option>
			</select>

            <button type="button" id="convert-btn">Convert</button>

            <div id="result"></div>
        </form>
    </div>

    <script src="script.js"></script>
</body>

</html>
