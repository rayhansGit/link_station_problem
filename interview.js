//initiating link stations' locations, maximum power variable and selected link station which will carry the max power and reach
var link_stations_locations = [];
var max_power               = 0;
var selected_station        = [];

function calculate_by_user_input() {
    //taking input from users
    var device_location_x   = prompt("Enter device location's x coordinate");
    var device_location_y   = prompt("Enter device location's y coordinate");
    var device_location     = [device_location_x, device_location_y];
    var num_of_link_station = prompt('Please enter number of power stations');

    //taking input for multiple link stations' coordinates
    for (let i = 1; i <= num_of_link_station; i++) {
        let link_station_x        = prompt(`Enter Power station ${i}'s x coordinate`);
        let link_station_y        = prompt(`Enter Power station ${i}'s y coordinate`);
        let link_station_r        = prompt(`Enter Power station ${i}'s reach`);
        let link_station_location = [link_station_x, link_station_y, link_station_r];

        link_stations_locations[i]= link_station_location;
    }

    result(link_stations_locations, device_location);
}

/**
 * Check distance between the device and the link station
 * @param {device[]} the device coordinates
 * @param {link_station[]} link station coordinates
 * @return {int|double} distance between the device and the link station
 */
function checkDistance(device, link_station) {
    //distance of two points in a 2D surface = Math.pow(x1 - x2) + (y1-y2)
    let deviceDistance = Math.sqrt(Math.pow((link_station[0] - device[0]), 2) + Math.pow((link_station[1] - device[1]), 2));
    return deviceDistance;
}

/**
 * Check power of the link station
 * @param {int|double ls_reach} the device coordinates
 * @param {int|double device distance} link station coordinates
 * @return {int|double} power of the link_station
 */
function checkPower(ls_reach, device_distance) {

    if (device_distance < ls_reach) {
        //power = (reach - device's distance from linkstation)^2
        let power = Math.pow((ls_reach - device_distance), 2);
        return power;
    } else {
        //if distance > reach, power = 0
        return 0;
    }

}

/**
 * Find the best link station
 * @param {link_stations_locations[]} the device coordinates
 * @param {link_stations_locations[]} link station coordinates
 * @return {null} Prints the result in the document body
 */
function result(link_stations_locations, device_location) {
    for (let ls_index in link_stations_locations) {
        let current_station = link_stations_locations[ls_index];
        let distance        = checkDistance(device_location, current_station);
        let power           = checkPower(link_stations_locations[ls_index][2], distance);

        //if calculated power is greate than previous link station's power, swaping the selected link station to the new one
        if (power > max_power) {
            selected_station = current_station;
            max_power        = power;
        }
    }
    //Checking if any link station was found or not
    if (selected_station.length != 0) {
        document.write(`Best link station for point ${device_location[0]},${device_location[1]} is ${selected_station[0]},${selected_station[1]} with power ${max_power}`);

    } else {
        document.write(`No link station within reach for point ${device_location[0]},${device_location[1]}`);
    }
}


/**
 * Tester
 * 
 * @return {null} Prints the result in the document body
 */
function test_code() {

    let device_locations    = [
        [20, 0],
        [10, 20],
        [0, 0]
    ];
    link_stations_locations = [
        [0, 0, 10],
        [20, 20, 5],
        [10, 0, 12]
    ];

    //iterating through the link stations find the power and reach
    for (let dl_index in device_locations) {
        result(link_stations_locations, device_locations[dl_index]);
    }

}

//test_code();
calculate_by_user_input();