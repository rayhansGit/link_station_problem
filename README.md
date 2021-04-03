/**
 * @author Md Rayhan Al Islam
 * Hours spent: 3.5hours
 */


In a 2D pane there are some link stations of which the x,y coordinates and the reach will be given as input. On the same pane there will be a device, of which the x and y co-ordinate will also be as user input. Depending on the input we have to calculate the best link station which has maximum power.


*Basic note:
all the link_station_location arrays structured like this [x_coordinate, y_coordinate, reach]
device location array is structure as [x_coordinate, y_coordinate]

The link_station.html file includes the search_link_station.js file. There are 5 functions in total in the JS file.

1. 'calculate_by_user_input' function is created for taking the coordinates as user input from the designed user interface, after the prompt the values are added in an array and sent to the 'result' method. 
2. The result method takes 2 parameters as input. i) link_stations_locations and ii) device_location. 

link_stations_locations array list looks like this = [[0,0,2],[1,3,5],[10,20,50]..]
For each link station locations traverse, there is a loop written which goes through the array list.

Inside this there are two different methods called checkDistance and checkPower.

3. checkDistance takes the device and the link station coordinate and calculates the distance of the two points using the formula which is ((x1 - x2) + (y1-y2))^2
4. checkPower calculates the power using the given formula which is power = (reach - device's distance from linkstation)^2

The resulting power from the calculation is compared with the max_power variable, if it's bigger, the max_power is replaced by the new power and that link station coornates are copied in the selected_station. Otherwise, the loop keeps moving.

After iterating all the link_station coordinates, the result in printed inside the span of the html.

5. Lastly, there is another method named test_code, which can be used to test the program without the userprompt, for that, the js inside the html can be used. Just need to replace the function with this one

function myfunction(){
		test_code();
		//calculate_by_user_input();
	}


