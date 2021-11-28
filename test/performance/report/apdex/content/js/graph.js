/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 21.0, "minX": 0.0, "maxY": 2763.0, "series": [{"data": [[0.0, 21.0], [0.1, 24.0], [0.2, 25.0], [0.3, 25.0], [0.4, 25.0], [0.5, 25.0], [0.6, 26.0], [0.7, 26.0], [0.8, 26.0], [0.9, 26.0], [1.0, 26.0], [1.1, 26.0], [1.2, 26.0], [1.3, 26.0], [1.4, 27.0], [1.5, 27.0], [1.6, 27.0], [1.7, 27.0], [1.8, 27.0], [1.9, 27.0], [2.0, 27.0], [2.1, 27.0], [2.2, 27.0], [2.3, 27.0], [2.4, 27.0], [2.5, 27.0], [2.6, 27.0], [2.7, 27.0], [2.8, 27.0], [2.9, 27.0], [3.0, 28.0], [3.1, 28.0], [3.2, 28.0], [3.3, 28.0], [3.4, 28.0], [3.5, 28.0], [3.6, 28.0], [3.7, 28.0], [3.8, 28.0], [3.9, 28.0], [4.0, 28.0], [4.1, 28.0], [4.2, 28.0], [4.3, 28.0], [4.4, 28.0], [4.5, 28.0], [4.6, 28.0], [4.7, 28.0], [4.8, 28.0], [4.9, 28.0], [5.0, 28.0], [5.1, 28.0], [5.2, 28.0], [5.3, 28.0], [5.4, 29.0], [5.5, 29.0], [5.6, 29.0], [5.7, 29.0], [5.8, 29.0], [5.9, 29.0], [6.0, 29.0], [6.1, 29.0], [6.2, 29.0], [6.3, 29.0], [6.4, 29.0], [6.5, 29.0], [6.6, 29.0], [6.7, 29.0], [6.8, 29.0], [6.9, 29.0], [7.0, 29.0], [7.1, 29.0], [7.2, 29.0], [7.3, 29.0], [7.4, 29.0], [7.5, 29.0], [7.6, 29.0], [7.7, 29.0], [7.8, 29.0], [7.9, 29.0], [8.0, 29.0], [8.1, 29.0], [8.2, 29.0], [8.3, 29.0], [8.4, 29.0], [8.5, 29.0], [8.6, 29.0], [8.7, 30.0], [8.8, 30.0], [8.9, 30.0], [9.0, 30.0], [9.1, 30.0], [9.2, 30.0], [9.3, 30.0], [9.4, 30.0], [9.5, 30.0], [9.6, 30.0], [9.7, 30.0], [9.8, 30.0], [9.9, 30.0], [10.0, 30.0], [10.1, 30.0], [10.2, 30.0], [10.3, 30.0], [10.4, 30.0], [10.5, 30.0], [10.6, 30.0], [10.7, 30.0], [10.8, 30.0], [10.9, 30.0], [11.0, 30.0], [11.1, 30.0], [11.2, 30.0], [11.3, 30.0], [11.4, 30.0], [11.5, 30.0], [11.6, 30.0], [11.7, 30.0], [11.8, 30.0], [11.9, 30.0], [12.0, 30.0], [12.1, 30.0], [12.2, 30.0], [12.3, 30.0], [12.4, 30.0], [12.5, 30.0], [12.6, 30.0], [12.7, 31.0], [12.8, 31.0], [12.9, 31.0], [13.0, 31.0], [13.1, 31.0], [13.2, 31.0], [13.3, 31.0], [13.4, 31.0], [13.5, 31.0], [13.6, 31.0], [13.7, 31.0], [13.8, 31.0], [13.9, 31.0], [14.0, 31.0], [14.1, 31.0], [14.2, 31.0], [14.3, 31.0], [14.4, 31.0], [14.5, 31.0], [14.6, 31.0], [14.7, 31.0], [14.8, 31.0], [14.9, 31.0], [15.0, 31.0], [15.1, 31.0], [15.2, 31.0], [15.3, 31.0], [15.4, 31.0], [15.5, 31.0], [15.6, 31.0], [15.7, 31.0], [15.8, 31.0], [15.9, 31.0], [16.0, 31.0], [16.1, 31.0], [16.2, 31.0], [16.3, 31.0], [16.4, 31.0], [16.5, 31.0], [16.6, 31.0], [16.7, 31.0], [16.8, 31.0], [16.9, 31.0], [17.0, 31.0], [17.1, 31.0], [17.2, 32.0], [17.3, 32.0], [17.4, 32.0], [17.5, 32.0], [17.6, 32.0], [17.7, 32.0], [17.8, 32.0], [17.9, 32.0], [18.0, 32.0], [18.1, 32.0], [18.2, 32.0], [18.3, 32.0], [18.4, 32.0], [18.5, 32.0], [18.6, 32.0], [18.7, 32.0], [18.8, 32.0], [18.9, 32.0], [19.0, 32.0], [19.1, 32.0], [19.2, 32.0], [19.3, 32.0], [19.4, 32.0], [19.5, 32.0], [19.6, 32.0], [19.7, 32.0], [19.8, 32.0], [19.9, 32.0], [20.0, 32.0], [20.1, 32.0], [20.2, 32.0], [20.3, 32.0], [20.4, 32.0], [20.5, 32.0], [20.6, 32.0], [20.7, 32.0], [20.8, 32.0], [20.9, 32.0], [21.0, 32.0], [21.1, 32.0], [21.2, 32.0], [21.3, 32.0], [21.4, 32.0], [21.5, 32.0], [21.6, 32.0], [21.7, 32.0], [21.8, 32.0], [21.9, 32.0], [22.0, 33.0], [22.1, 33.0], [22.2, 33.0], [22.3, 33.0], [22.4, 33.0], [22.5, 33.0], [22.6, 33.0], [22.7, 33.0], [22.8, 33.0], [22.9, 33.0], [23.0, 33.0], [23.1, 33.0], [23.2, 33.0], [23.3, 33.0], [23.4, 33.0], [23.5, 33.0], [23.6, 33.0], [23.7, 33.0], [23.8, 33.0], [23.9, 33.0], [24.0, 33.0], [24.1, 33.0], [24.2, 33.0], [24.3, 33.0], [24.4, 33.0], [24.5, 33.0], [24.6, 33.0], [24.7, 33.0], [24.8, 33.0], [24.9, 33.0], [25.0, 33.0], [25.1, 33.0], [25.2, 33.0], [25.3, 33.0], [25.4, 33.0], [25.5, 33.0], [25.6, 33.0], [25.7, 33.0], [25.8, 33.0], [25.9, 33.0], [26.0, 33.0], [26.1, 33.0], [26.2, 33.0], [26.3, 33.0], [26.4, 33.0], [26.5, 33.0], [26.6, 33.0], [26.7, 33.0], [26.8, 33.0], [26.9, 33.0], [27.0, 33.0], [27.1, 34.0], [27.2, 34.0], [27.3, 34.0], [27.4, 34.0], [27.5, 34.0], [27.6, 34.0], [27.7, 34.0], [27.8, 34.0], [27.9, 34.0], [28.0, 34.0], [28.1, 34.0], [28.2, 34.0], [28.3, 34.0], [28.4, 34.0], [28.5, 34.0], [28.6, 34.0], [28.7, 34.0], [28.8, 34.0], [28.9, 34.0], [29.0, 34.0], [29.1, 34.0], [29.2, 34.0], [29.3, 34.0], [29.4, 34.0], [29.5, 34.0], [29.6, 34.0], [29.7, 34.0], [29.8, 34.0], [29.9, 34.0], [30.0, 34.0], [30.1, 34.0], [30.2, 34.0], [30.3, 34.0], [30.4, 34.0], [30.5, 34.0], [30.6, 34.0], [30.7, 34.0], [30.8, 34.0], [30.9, 34.0], [31.0, 34.0], [31.1, 34.0], [31.2, 34.0], [31.3, 34.0], [31.4, 34.0], [31.5, 34.0], [31.6, 34.0], [31.7, 34.0], [31.8, 34.0], [31.9, 34.0], [32.0, 34.0], [32.1, 34.0], [32.2, 35.0], [32.3, 35.0], [32.4, 35.0], [32.5, 35.0], [32.6, 35.0], [32.7, 35.0], [32.8, 35.0], [32.9, 35.0], [33.0, 35.0], [33.1, 35.0], [33.2, 35.0], [33.3, 35.0], [33.4, 35.0], [33.5, 35.0], [33.6, 35.0], [33.7, 35.0], [33.8, 35.0], [33.9, 35.0], [34.0, 35.0], [34.1, 35.0], [34.2, 35.0], [34.3, 35.0], [34.4, 35.0], [34.5, 35.0], [34.6, 35.0], [34.7, 35.0], [34.8, 35.0], [34.9, 35.0], [35.0, 35.0], [35.1, 35.0], [35.2, 35.0], [35.3, 35.0], [35.4, 35.0], [35.5, 35.0], [35.6, 35.0], [35.7, 35.0], [35.8, 35.0], [35.9, 35.0], [36.0, 35.0], [36.1, 35.0], [36.2, 35.0], [36.3, 35.0], [36.4, 35.0], [36.5, 35.0], [36.6, 35.0], [36.7, 35.0], [36.8, 35.0], [36.9, 35.0], [37.0, 35.0], [37.1, 35.0], [37.2, 36.0], [37.3, 36.0], [37.4, 36.0], [37.5, 36.0], [37.6, 36.0], [37.7, 36.0], [37.8, 36.0], [37.9, 36.0], [38.0, 36.0], [38.1, 36.0], [38.2, 36.0], [38.3, 36.0], [38.4, 36.0], [38.5, 36.0], [38.6, 36.0], [38.7, 36.0], [38.8, 36.0], [38.9, 36.0], [39.0, 36.0], [39.1, 36.0], [39.2, 36.0], [39.3, 36.0], [39.4, 36.0], [39.5, 36.0], [39.6, 36.0], [39.7, 36.0], [39.8, 36.0], [39.9, 36.0], [40.0, 36.0], [40.1, 36.0], [40.2, 36.0], [40.3, 36.0], [40.4, 36.0], [40.5, 36.0], [40.6, 36.0], [40.7, 36.0], [40.8, 36.0], [40.9, 36.0], [41.0, 36.0], [41.1, 36.0], [41.2, 36.0], [41.3, 36.0], [41.4, 36.0], [41.5, 36.0], [41.6, 36.0], [41.7, 36.0], [41.8, 36.0], [41.9, 37.0], [42.0, 37.0], [42.1, 37.0], [42.2, 37.0], [42.3, 37.0], [42.4, 37.0], [42.5, 37.0], [42.6, 37.0], [42.7, 37.0], [42.8, 37.0], [42.9, 37.0], [43.0, 37.0], [43.1, 37.0], [43.2, 37.0], [43.3, 37.0], [43.4, 37.0], [43.5, 37.0], [43.6, 37.0], [43.7, 37.0], [43.8, 37.0], [43.9, 37.0], [44.0, 37.0], [44.1, 37.0], [44.2, 37.0], [44.3, 37.0], [44.4, 37.0], [44.5, 37.0], [44.6, 37.0], [44.7, 37.0], [44.8, 37.0], [44.9, 37.0], [45.0, 37.0], [45.1, 37.0], [45.2, 37.0], [45.3, 37.0], [45.4, 37.0], [45.5, 37.0], [45.6, 37.0], [45.7, 37.0], [45.8, 37.0], [45.9, 37.0], [46.0, 37.0], [46.1, 37.0], [46.2, 37.0], [46.3, 38.0], [46.4, 38.0], [46.5, 38.0], [46.6, 38.0], [46.7, 38.0], [46.8, 38.0], [46.9, 38.0], [47.0, 38.0], [47.1, 38.0], [47.2, 38.0], [47.3, 38.0], [47.4, 38.0], [47.5, 38.0], [47.6, 38.0], [47.7, 38.0], [47.8, 38.0], [47.9, 38.0], [48.0, 38.0], [48.1, 38.0], [48.2, 38.0], [48.3, 38.0], [48.4, 38.0], [48.5, 38.0], [48.6, 38.0], [48.7, 38.0], [48.8, 38.0], [48.9, 38.0], [49.0, 38.0], [49.1, 38.0], [49.2, 38.0], [49.3, 38.0], [49.4, 38.0], [49.5, 38.0], [49.6, 38.0], [49.7, 38.0], [49.8, 38.0], [49.9, 38.0], [50.0, 38.0], [50.1, 38.0], [50.2, 38.0], [50.3, 38.0], [50.4, 38.0], [50.5, 38.0], [50.6, 39.0], [50.7, 39.0], [50.8, 39.0], [50.9, 39.0], [51.0, 39.0], [51.1, 39.0], [51.2, 39.0], [51.3, 39.0], [51.4, 39.0], [51.5, 39.0], [51.6, 39.0], [51.7, 39.0], [51.8, 39.0], [51.9, 39.0], [52.0, 39.0], [52.1, 39.0], [52.2, 39.0], [52.3, 39.0], [52.4, 39.0], [52.5, 39.0], [52.6, 39.0], [52.7, 39.0], [52.8, 39.0], [52.9, 39.0], [53.0, 39.0], [53.1, 39.0], [53.2, 39.0], [53.3, 39.0], [53.4, 39.0], [53.5, 39.0], [53.6, 39.0], [53.7, 39.0], [53.8, 39.0], [53.9, 39.0], [54.0, 39.0], [54.1, 39.0], [54.2, 39.0], [54.3, 39.0], [54.4, 39.0], [54.5, 39.0], [54.6, 39.0], [54.7, 40.0], [54.8, 40.0], [54.9, 40.0], [55.0, 40.0], [55.1, 40.0], [55.2, 40.0], [55.3, 40.0], [55.4, 40.0], [55.5, 40.0], [55.6, 40.0], [55.7, 40.0], [55.8, 40.0], [55.9, 40.0], [56.0, 40.0], [56.1, 40.0], [56.2, 40.0], [56.3, 40.0], [56.4, 40.0], [56.5, 40.0], [56.6, 40.0], [56.7, 40.0], [56.8, 40.0], [56.9, 40.0], [57.0, 40.0], [57.1, 40.0], [57.2, 40.0], [57.3, 40.0], [57.4, 40.0], [57.5, 40.0], [57.6, 40.0], [57.7, 40.0], [57.8, 40.0], [57.9, 40.0], [58.0, 40.0], [58.1, 40.0], [58.2, 40.0], [58.3, 40.0], [58.4, 40.0], [58.5, 40.0], [58.6, 40.0], [58.7, 40.0], [58.8, 40.0], [58.9, 41.0], [59.0, 41.0], [59.1, 41.0], [59.2, 41.0], [59.3, 41.0], [59.4, 41.0], [59.5, 41.0], [59.6, 41.0], [59.7, 41.0], [59.8, 41.0], [59.9, 41.0], [60.0, 41.0], [60.1, 41.0], [60.2, 41.0], [60.3, 41.0], [60.4, 41.0], [60.5, 41.0], [60.6, 41.0], [60.7, 41.0], [60.8, 41.0], [60.9, 41.0], [61.0, 41.0], [61.1, 41.0], [61.2, 41.0], [61.3, 41.0], [61.4, 41.0], [61.5, 41.0], [61.6, 41.0], [61.7, 41.0], [61.8, 41.0], [61.9, 41.0], [62.0, 41.0], [62.1, 41.0], [62.2, 41.0], [62.3, 41.0], [62.4, 41.0], [62.5, 41.0], [62.6, 41.0], [62.7, 41.0], [62.8, 41.0], [62.9, 41.0], [63.0, 42.0], [63.1, 42.0], [63.2, 42.0], [63.3, 42.0], [63.4, 42.0], [63.5, 42.0], [63.6, 42.0], [63.7, 42.0], [63.8, 42.0], [63.9, 42.0], [64.0, 42.0], [64.1, 42.0], [64.2, 42.0], [64.3, 42.0], [64.4, 42.0], [64.5, 42.0], [64.6, 42.0], [64.7, 42.0], [64.8, 42.0], [64.9, 42.0], [65.0, 42.0], [65.1, 42.0], [65.2, 42.0], [65.3, 42.0], [65.4, 42.0], [65.5, 42.0], [65.6, 42.0], [65.7, 42.0], [65.8, 42.0], [65.9, 42.0], [66.0, 42.0], [66.1, 42.0], [66.2, 42.0], [66.3, 42.0], [66.4, 42.0], [66.5, 42.0], [66.6, 42.0], [66.7, 42.0], [66.8, 42.0], [66.9, 43.0], [67.0, 43.0], [67.1, 43.0], [67.2, 43.0], [67.3, 43.0], [67.4, 43.0], [67.5, 43.0], [67.6, 43.0], [67.7, 43.0], [67.8, 43.0], [67.9, 43.0], [68.0, 43.0], [68.1, 43.0], [68.2, 43.0], [68.3, 43.0], [68.4, 43.0], [68.5, 43.0], [68.6, 43.0], [68.7, 43.0], [68.8, 43.0], [68.9, 43.0], [69.0, 43.0], [69.1, 43.0], [69.2, 43.0], [69.3, 43.0], [69.4, 43.0], [69.5, 43.0], [69.6, 43.0], [69.7, 43.0], [69.8, 43.0], [69.9, 43.0], [70.0, 43.0], [70.1, 43.0], [70.2, 43.0], [70.3, 43.0], [70.4, 43.0], [70.5, 43.0], [70.6, 44.0], [70.7, 44.0], [70.8, 44.0], [70.9, 44.0], [71.0, 44.0], [71.1, 44.0], [71.2, 44.0], [71.3, 44.0], [71.4, 44.0], [71.5, 44.0], [71.6, 44.0], [71.7, 44.0], [71.8, 44.0], [71.9, 44.0], [72.0, 44.0], [72.1, 44.0], [72.2, 44.0], [72.3, 44.0], [72.4, 44.0], [72.5, 44.0], [72.6, 44.0], [72.7, 44.0], [72.8, 44.0], [72.9, 44.0], [73.0, 44.0], [73.1, 44.0], [73.2, 44.0], [73.3, 44.0], [73.4, 44.0], [73.5, 44.0], [73.6, 44.0], [73.7, 44.0], [73.8, 44.0], [73.9, 45.0], [74.0, 45.0], [74.1, 45.0], [74.2, 45.0], [74.3, 45.0], [74.4, 45.0], [74.5, 45.0], [74.6, 45.0], [74.7, 45.0], [74.8, 45.0], [74.9, 45.0], [75.0, 45.0], [75.1, 45.0], [75.2, 45.0], [75.3, 45.0], [75.4, 45.0], [75.5, 45.0], [75.6, 45.0], [75.7, 45.0], [75.8, 45.0], [75.9, 45.0], [76.0, 45.0], [76.1, 45.0], [76.2, 45.0], [76.3, 45.0], [76.4, 45.0], [76.5, 45.0], [76.6, 45.0], [76.7, 45.0], [76.8, 45.0], [76.9, 46.0], [77.0, 46.0], [77.1, 46.0], [77.2, 46.0], [77.3, 46.0], [77.4, 46.0], [77.5, 46.0], [77.6, 46.0], [77.7, 46.0], [77.8, 46.0], [77.9, 46.0], [78.0, 46.0], [78.1, 46.0], [78.2, 46.0], [78.3, 46.0], [78.4, 46.0], [78.5, 46.0], [78.6, 46.0], [78.7, 46.0], [78.8, 46.0], [78.9, 46.0], [79.0, 46.0], [79.1, 46.0], [79.2, 46.0], [79.3, 46.0], [79.4, 46.0], [79.5, 47.0], [79.6, 47.0], [79.7, 47.0], [79.8, 47.0], [79.9, 47.0], [80.0, 47.0], [80.1, 47.0], [80.2, 47.0], [80.3, 47.0], [80.4, 47.0], [80.5, 47.0], [80.6, 47.0], [80.7, 47.0], [80.8, 47.0], [80.9, 47.0], [81.0, 47.0], [81.1, 47.0], [81.2, 47.0], [81.3, 47.0], [81.4, 47.0], [81.5, 47.0], [81.6, 48.0], [81.7, 48.0], [81.8, 48.0], [81.9, 48.0], [82.0, 48.0], [82.1, 48.0], [82.2, 48.0], [82.3, 48.0], [82.4, 48.0], [82.5, 48.0], [82.6, 48.0], [82.7, 48.0], [82.8, 48.0], [82.9, 48.0], [83.0, 48.0], [83.1, 48.0], [83.2, 48.0], [83.3, 48.0], [83.4, 48.0], [83.5, 49.0], [83.6, 49.0], [83.7, 49.0], [83.8, 49.0], [83.9, 49.0], [84.0, 49.0], [84.1, 49.0], [84.2, 49.0], [84.3, 49.0], [84.4, 49.0], [84.5, 49.0], [84.6, 49.0], [84.7, 49.0], [84.8, 49.0], [84.9, 50.0], [85.0, 50.0], [85.1, 50.0], [85.2, 50.0], [85.3, 50.0], [85.4, 50.0], [85.5, 50.0], [85.6, 50.0], [85.7, 50.0], [85.8, 50.0], [85.9, 50.0], [86.0, 50.0], [86.1, 50.0], [86.2, 51.0], [86.3, 51.0], [86.4, 51.0], [86.5, 51.0], [86.6, 51.0], [86.7, 51.0], [86.8, 51.0], [86.9, 51.0], [87.0, 51.0], [87.1, 51.0], [87.2, 51.0], [87.3, 52.0], [87.4, 52.0], [87.5, 52.0], [87.6, 52.0], [87.7, 52.0], [87.8, 52.0], [87.9, 52.0], [88.0, 52.0], [88.1, 52.0], [88.2, 52.0], [88.3, 53.0], [88.4, 53.0], [88.5, 53.0], [88.6, 53.0], [88.7, 53.0], [88.8, 53.0], [88.9, 53.0], [89.0, 53.0], [89.1, 54.0], [89.2, 54.0], [89.3, 54.0], [89.4, 54.0], [89.5, 54.0], [89.6, 54.0], [89.7, 54.0], [89.8, 55.0], [89.9, 55.0], [90.0, 55.0], [90.1, 55.0], [90.2, 55.0], [90.3, 55.0], [90.4, 55.0], [90.5, 56.0], [90.6, 56.0], [90.7, 56.0], [90.8, 56.0], [90.9, 56.0], [91.0, 57.0], [91.1, 57.0], [91.2, 57.0], [91.3, 57.0], [91.4, 57.0], [91.5, 57.0], [91.6, 58.0], [91.7, 58.0], [91.8, 58.0], [91.9, 58.0], [92.0, 58.0], [92.1, 59.0], [92.2, 59.0], [92.3, 59.0], [92.4, 59.0], [92.5, 60.0], [92.6, 60.0], [92.7, 60.0], [92.8, 60.0], [92.9, 60.0], [93.0, 61.0], [93.1, 61.0], [93.2, 61.0], [93.3, 62.0], [93.4, 62.0], [93.5, 62.0], [93.6, 62.0], [93.7, 63.0], [93.8, 63.0], [93.9, 63.0], [94.0, 63.0], [94.1, 64.0], [94.2, 64.0], [94.3, 64.0], [94.4, 65.0], [94.5, 65.0], [94.6, 65.0], [94.7, 66.0], [94.8, 66.0], [94.9, 66.0], [95.0, 67.0], [95.1, 67.0], [95.2, 67.0], [95.3, 68.0], [95.4, 68.0], [95.5, 69.0], [95.6, 69.0], [95.7, 69.0], [95.8, 70.0], [95.9, 70.0], [96.0, 71.0], [96.1, 71.0], [96.2, 72.0], [96.3, 72.0], [96.4, 73.0], [96.5, 73.0], [96.6, 74.0], [96.7, 74.0], [96.8, 75.0], [96.9, 76.0], [97.0, 76.0], [97.1, 77.0], [97.2, 78.0], [97.3, 79.0], [97.4, 79.0], [97.5, 80.0], [97.6, 81.0], [97.7, 82.0], [97.8, 84.0], [97.9, 85.0], [98.0, 87.0], [98.1, 88.0], [98.2, 90.0], [98.3, 92.0], [98.4, 95.0], [98.5, 99.0], [98.6, 102.0], [98.7, 107.0], [98.8, 112.0], [98.9, 119.0], [99.0, 129.0], [99.1, 140.0], [99.2, 150.0], [99.3, 164.0], [99.4, 178.0], [99.5, 190.0], [99.6, 204.0], [99.7, 220.0], [99.8, 245.0], [99.9, 278.0]], "isOverall": false, "label": "Search Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 240792.0, "series": [{"data": [[0.0, 240792.0], [600.0, 10.0], [700.0, 6.0], [2700.0, 1.0], [200.0, 898.0], [800.0, 1.0], [900.0, 1.0], [1000.0, 1.0], [1200.0, 2.0], [300.0, 86.0], [1400.0, 1.0], [100.0, 2547.0], [400.0, 29.0], [500.0, 11.0]], "isOverall": false, "label": "Search Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 244352.0, "series": [{"data": [[0.0, 244352.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 33.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 16.19877250409163, "minX": 1.62799998E12, "maxY": 30.0, "series": [{"data": [[1.62800016E12, 30.0], [1.62800034E12, 16.19877250409163], [1.62800022E12, 30.0], [1.62800004E12, 30.0], [1.6280001E12, 30.0], [1.62799998E12, 22.704351859660942], [1.62800028E12, 29.624368399626388]], "isOverall": false, "label": "Search Pdc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62800034E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 38.510204081632686, "minX": 1.0, "maxY": 63.54901960784316, "series": [{"data": [[2.0, 46.69285714285713], [3.0, 45.24884792626729], [4.0, 38.95151515151517], [5.0, 43.50673854447442], [6.0, 42.27354260089691], [7.0, 38.510204081632686], [8.0, 39.22904191616766], [9.0, 41.11854951185496], [10.0, 40.20345252774354], [11.0, 39.92723263506059], [12.0, 40.96045785639957], [13.0, 39.59870848708488], [14.0, 41.6752058554437], [15.0, 41.45909849749585], [1.0, 63.54901960784316], [16.0, 39.37386706948645], [17.0, 41.27219369038885], [18.0, 42.44301994301996], [19.0, 39.66370558375631], [20.0, 41.945161290322545], [21.0, 43.40687500000002], [22.0, 39.908533184606775], [23.0, 42.803899721448474], [24.0, 43.62002212389385], [25.0, 40.23497536945811], [26.0, 43.27668184117346], [27.0, 40.966926963711515], [28.0, 39.45560344827581], [29.0, 41.71222707423577], [30.0, 42.607063018060494]], "isOverall": false, "label": "Search Request", "isController": false}, {"data": [[28.537780396585678, 42.41904200731639]], "isOverall": false, "label": "Search Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 30.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 52374.45, "minX": 1.62799998E12, "maxY": 6099595.366666666, "series": [{"data": [[1.62800016E12, 6099595.366666666], [1.62800034E12, 1928808.2166666666], [1.62800022E12, 5818966.15], [1.62800004E12, 5938127.633333334], [1.6280001E12, 5985162.366666666], [1.62799998E12, 3259282.75], [1.62800028E12, 6005737.233333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62800016E12, 182277.76666666666], [1.62800034E12, 52374.45], [1.62800022E12, 174476.8], [1.62800004E12, 178583.23333333334], [1.6280001E12, 179270.93333333332], [1.62799998E12, 101672.86666666667], [1.62800028E12, 179014.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62800034E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 40.803436988543424, "minX": 1.62799998E12, "maxY": 43.720656527186875, "series": [{"data": [[1.62800016E12, 41.7795808932471], [1.62800034E12, 40.803436988543424], [1.62800022E12, 43.720656527186875], [1.62800004E12, 42.63269078426198], [1.6280001E12, 42.498373905973146], [1.62799998E12, 42.288226364172864], [1.62800028E12, 42.05605977154605]], "isOverall": false, "label": "Search Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62800034E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 40.54427168576117, "minX": 1.62799998E12, "maxY": 43.14449986486153, "series": [{"data": [[1.62800016E12, 41.24417319316044], [1.62800034E12, 40.54427168576117], [1.62800022E12, 43.14449986486153], [1.62800004E12, 42.09873490649809], [1.6280001E12, 41.89702998708681], [1.62799998E12, 42.01598212026647], [1.62800028E12, 41.51912162647565]], "isOverall": false, "label": "Search Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62800034E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.62799998E12, "maxY": 0.0586995024036431, "series": [{"data": [[1.62800016E12, 0.03572520520237979], [1.62800034E12, 0.0], [1.62800022E12, 0.043834000835401364], [1.62800004E12, 0.03207144057421375], [1.6280001E12, 0.034482758620689745], [1.62799998E12, 0.0586995024036431], [1.62800028E12, 0.034244115041069015]], "isOverall": false, "label": "Search Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62800034E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 21.0, "minX": 1.62799998E12, "maxY": 2763.0, "series": [{"data": [[1.62800016E12, 516.0], [1.62800034E12, 379.0], [1.62800022E12, 2763.0], [1.62800004E12, 480.0], [1.6280001E12, 417.0], [1.62799998E12, 1242.0], [1.62800028E12, 448.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62800016E12, 52.0], [1.62800034E12, 52.0], [1.62800022E12, 53.0], [1.62800004E12, 57.0], [1.6280001E12, 54.0], [1.62799998E12, 54.0], [1.62800028E12, 54.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62800016E12, 125.9900000000016], [1.62800034E12, 97.78999999999905], [1.62800022E12, 116.9900000000016], [1.62800004E12, 103.0], [1.6280001E12, 112.0], [1.62799998E12, 119.0], [1.62800028E12, 121.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62800016E12, 63.0], [1.62800034E12, 62.0], [1.62800022E12, 64.0], [1.62800004E12, 69.0], [1.6280001E12, 64.0], [1.62799998E12, 65.0], [1.62800028E12, 66.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62800016E12, 22.0], [1.62800034E12, 21.0], [1.62800022E12, 21.0], [1.62800004E12, 22.0], [1.6280001E12, 22.0], [1.62799998E12, 22.0], [1.62800028E12, 22.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62800016E12, 38.0], [1.62800034E12, 37.0], [1.62800022E12, 38.0], [1.62800004E12, 39.0], [1.6280001E12, 39.0], [1.62799998E12, 39.0], [1.62800028E12, 38.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62800034E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 34.0, "minX": 6.0, "maxY": 171.0, "series": [{"data": [[6.0, 35.5], [18.0, 43.0], [27.0, 36.0], [35.0, 42.0], [40.0, 36.5], [43.0, 45.0], [51.0, 37.0], [66.0, 40.0], [72.0, 38.0], [82.0, 39.0], [85.0, 35.0], [100.0, 38.0], [106.0, 38.0], [112.0, 36.0], [113.0, 35.0], [117.0, 37.0], [127.0, 36.0], [154.0, 36.0], [162.0, 36.0], [181.0, 171.0], [184.0, 37.0], [185.0, 38.0], [191.0, 34.0], [195.0, 37.0], [204.0, 113.0], [209.0, 37.0], [213.0, 38.0], [220.0, 39.0], [230.0, 140.0], [224.0, 36.0], [237.0, 38.0], [255.0, 37.0], [248.0, 34.0], [258.0, 39.0], [284.0, 36.0], [274.0, 40.0], [287.0, 36.0], [272.0, 35.0], [288.0, 36.0], [293.0, 37.0], [301.0, 37.0], [320.0, 37.0], [325.0, 36.0], [344.0, 36.0], [348.0, 37.0], [338.0, 39.0], [345.0, 36.0], [342.0, 37.0], [362.0, 38.0], [370.0, 37.0], [399.0, 37.0], [410.0, 38.0], [411.0, 40.0], [412.0, 39.5], [408.0, 37.0], [431.0, 42.0], [424.0, 36.0], [418.0, 36.0], [447.0, 36.0], [438.0, 38.0], [459.0, 40.0], [464.0, 38.0], [471.0, 38.0], [467.0, 41.0], [469.0, 37.0], [488.0, 39.0], [484.0, 38.0], [493.0, 37.0], [507.0, 38.0], [499.0, 42.0], [502.0, 36.0], [525.0, 43.0], [516.0, 42.0], [542.0, 38.0], [538.0, 38.0], [545.0, 38.0], [560.0, 38.0], [557.0, 38.0], [569.0, 40.0], [562.0, 46.0], [575.0, 43.0], [598.0, 40.0], [606.0, 39.5], [595.0, 45.0], [586.0, 43.0], [603.0, 40.0], [596.0, 45.0], [605.0, 42.0], [585.0, 42.0], [634.0, 41.0], [623.0, 42.0], [614.0, 39.0], [618.0, 41.0], [616.0, 41.0], [619.0, 42.5], [636.0, 41.0], [625.0, 41.0], [638.0, 41.0], [628.0, 41.0], [629.0, 43.0], [630.0, 42.0], [627.0, 41.0], [626.0, 38.0], [637.0, 41.0], [610.0, 42.0], [609.0, 41.0], [613.0, 42.0], [633.0, 42.0], [622.0, 42.0], [621.0, 40.0], [668.0, 39.0], [665.0, 41.0], [648.0, 39.0], [652.0, 41.0], [661.0, 40.0], [662.0, 41.0], [654.0, 41.0], [664.0, 40.0], [646.0, 39.0], [647.0, 40.0], [645.0, 40.0], [642.0, 39.0], [640.0, 43.0], [643.0, 39.0], [644.0, 40.0], [660.0, 40.5], [669.0, 39.0], [670.0, 40.0], [671.0, 38.0], [656.0, 39.0], [659.0, 41.0], [658.0, 40.0], [666.0, 40.0], [675.0, 40.0], [690.0, 38.0], [699.0, 38.0], [691.0, 39.0], [693.0, 38.0], [692.0, 39.0], [673.0, 40.0], [674.0, 40.0], [698.0, 39.0], [676.0, 39.0], [678.0, 40.0], [677.0, 38.0], [696.0, 39.0], [679.0, 40.0], [697.0, 38.0], [695.0, 39.0], [694.0, 39.0], [687.0, 39.0], [686.0, 39.0], [685.0, 39.0], [681.0, 39.0], [680.0, 38.0], [684.0, 40.0], [702.0, 39.0], [700.0, 39.0], [703.0, 38.0], [728.0, 38.0], [734.0, 38.0], [721.0, 38.0], [711.0, 38.0], [709.0, 39.0], [708.0, 38.0], [707.0, 37.0], [710.0, 38.0], [733.0, 38.0], [732.0, 37.0], [731.0, 38.0], [729.0, 37.0], [730.0, 37.0], [719.0, 38.0], [705.0, 38.0], [704.0, 39.0], [706.0, 38.0], [714.0, 39.0], [713.0, 38.0], [712.0, 39.0], [715.0, 39.0], [716.0, 38.0], [717.0, 37.0], [718.0, 38.0], [727.0, 39.0], [726.0, 38.0], [725.0, 38.0], [723.0, 38.0], [724.0, 38.0], [735.0, 38.0], [720.0, 38.0], [736.0, 37.0], [762.0, 37.0], [749.0, 38.0], [738.0, 37.0], [737.0, 37.0], [739.0, 37.0], [740.0, 37.0], [741.0, 37.0], [742.0, 37.0], [761.0, 36.0], [743.0, 37.0], [748.0, 37.0], [745.0, 38.0], [744.0, 38.0], [747.0, 37.0], [746.0, 37.0], [754.0, 37.0], [755.0, 37.0], [757.0, 37.0], [759.0, 37.0], [758.0, 36.0], [756.0, 37.0], [764.0, 37.0], [765.0, 37.0], [763.0, 37.0], [753.0, 37.0], [752.0, 37.0], [767.0, 36.0], [751.0, 37.0], [750.0, 37.0], [769.0, 36.0], [778.0, 36.0], [768.0, 36.0], [775.0, 37.0], [771.0, 37.0], [773.0, 36.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 778.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 34.0, "minX": 6.0, "maxY": 168.0, "series": [{"data": [[6.0, 35.5], [18.0, 43.0], [27.0, 35.0], [35.0, 42.0], [40.0, 36.5], [43.0, 45.0], [51.0, 37.0], [66.0, 40.0], [72.0, 38.0], [82.0, 39.0], [85.0, 35.0], [100.0, 38.0], [106.0, 38.0], [112.0, 36.0], [113.0, 35.0], [117.0, 37.0], [127.0, 36.0], [154.0, 36.0], [162.0, 35.0], [181.0, 168.0], [184.0, 37.0], [185.0, 38.0], [191.0, 34.0], [195.0, 37.0], [204.0, 110.5], [209.0, 37.0], [213.0, 38.0], [220.0, 39.0], [230.0, 138.5], [224.0, 36.0], [237.0, 38.0], [255.0, 37.0], [248.0, 34.0], [258.0, 39.0], [284.0, 36.0], [274.0, 40.0], [287.0, 36.0], [272.0, 35.0], [288.0, 36.0], [293.0, 37.0], [301.0, 37.0], [320.0, 37.0], [325.0, 36.0], [344.0, 36.0], [348.0, 37.0], [338.0, 39.0], [345.0, 36.0], [342.0, 37.0], [362.0, 37.5], [370.0, 36.5], [399.0, 36.0], [410.0, 38.0], [411.0, 40.0], [412.0, 39.5], [408.0, 36.5], [431.0, 41.0], [424.0, 36.0], [418.0, 36.0], [447.0, 36.0], [438.0, 37.5], [459.0, 40.0], [464.0, 37.5], [471.0, 38.0], [467.0, 40.0], [469.0, 37.0], [488.0, 39.0], [484.0, 38.0], [493.0, 37.0], [507.0, 38.0], [499.0, 42.0], [502.0, 36.0], [525.0, 42.0], [516.0, 42.0], [542.0, 38.0], [538.0, 38.0], [545.0, 37.0], [560.0, 37.0], [557.0, 38.0], [569.0, 40.0], [562.0, 44.0], [575.0, 43.0], [598.0, 40.0], [606.0, 39.0], [595.0, 45.0], [586.0, 42.0], [603.0, 40.0], [596.0, 45.0], [605.0, 41.0], [585.0, 42.0], [634.0, 41.0], [623.0, 42.0], [614.0, 39.0], [618.0, 40.0], [616.0, 40.0], [619.0, 42.0], [636.0, 41.0], [625.0, 40.0], [638.0, 40.0], [628.0, 40.0], [629.0, 43.0], [630.0, 41.0], [627.0, 40.0], [626.0, 38.0], [637.0, 41.0], [610.0, 41.0], [609.0, 40.0], [613.0, 41.0], [633.0, 41.0], [622.0, 42.0], [621.0, 40.0], [668.0, 39.0], [665.0, 40.0], [648.0, 39.0], [652.0, 41.0], [661.0, 40.0], [662.0, 40.0], [654.0, 40.0], [664.0, 39.5], [646.0, 38.0], [647.0, 40.0], [645.0, 40.0], [642.0, 39.0], [640.0, 42.0], [643.0, 38.0], [644.0, 40.0], [660.0, 40.0], [669.0, 39.0], [670.0, 40.0], [671.0, 38.0], [656.0, 38.0], [659.0, 40.0], [658.0, 40.0], [666.0, 39.0], [675.0, 40.0], [690.0, 37.0], [699.0, 38.0], [691.0, 39.0], [693.0, 38.0], [692.0, 39.0], [673.0, 39.0], [674.0, 39.0], [698.0, 39.0], [676.0, 39.0], [678.0, 39.0], [677.0, 38.0], [696.0, 39.0], [679.0, 39.0], [697.0, 38.0], [695.0, 39.0], [694.0, 38.0], [687.0, 38.0], [686.0, 38.0], [685.0, 39.0], [681.0, 39.0], [680.0, 38.0], [684.0, 39.0], [702.0, 39.0], [700.0, 38.0], [703.0, 38.0], [728.0, 38.0], [734.0, 38.0], [721.0, 38.0], [711.0, 38.0], [709.0, 38.0], [708.0, 38.0], [707.0, 37.0], [710.0, 37.0], [733.0, 38.0], [732.0, 37.0], [731.0, 37.0], [729.0, 36.0], [730.0, 37.0], [719.0, 38.0], [705.0, 37.0], [704.0, 38.0], [706.0, 38.0], [714.0, 39.0], [713.0, 38.0], [712.0, 38.0], [715.0, 39.0], [716.0, 38.0], [717.0, 36.0], [718.0, 38.0], [727.0, 38.0], [726.0, 38.0], [725.0, 38.0], [723.0, 38.0], [724.0, 38.0], [735.0, 38.0], [720.0, 37.0], [736.0, 37.0], [762.0, 37.0], [749.0, 38.0], [738.0, 37.0], [737.0, 37.0], [739.0, 37.0], [740.0, 36.0], [741.0, 37.0], [742.0, 37.0], [761.0, 36.0], [743.0, 37.0], [748.0, 37.0], [745.0, 38.0], [744.0, 38.0], [747.0, 37.0], [746.0, 36.0], [754.0, 36.0], [755.0, 37.0], [757.0, 37.0], [759.0, 37.0], [758.0, 36.0], [756.0, 37.0], [764.0, 36.0], [765.0, 37.0], [763.0, 36.0], [753.0, 37.0], [752.0, 37.0], [767.0, 36.0], [751.0, 37.0], [750.0, 37.0], [769.0, 36.0], [778.0, 36.0], [768.0, 36.0], [775.0, 37.0], [771.0, 37.0], [773.0, 36.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 778.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 203.25, "minX": 1.62799998E12, "maxY": 709.0, "series": [{"data": [[1.62800016E12, 709.0], [1.62800034E12, 203.25], [1.62800022E12, 678.3], [1.62800004E12, 694.2833333333333], [1.6280001E12, 696.6166666666667], [1.62799998E12, 395.73333333333335], [1.62800028E12, 695.9166666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62800034E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 203.66666666666666, "minX": 1.62799998E12, "maxY": 708.65, "series": [{"data": [[1.62800016E12, 708.65], [1.62800034E12, 203.66666666666666], [1.62800022E12, 678.3166666666667], [1.62800004E12, 694.2833333333333], [1.6280001E12, 696.9666666666667], [1.62799998E12, 395.23333333333335], [1.62800028E12, 695.9833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62800034E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 203.66666666666666, "minX": 1.62799998E12, "maxY": 708.65, "series": [{"data": [[1.62800016E12, 708.65], [1.62800034E12, 203.66666666666666], [1.62800022E12, 678.3166666666667], [1.62800004E12, 694.2833333333333], [1.6280001E12, 696.9666666666667], [1.62799998E12, 395.23333333333335], [1.62800028E12, 695.9833333333333]], "isOverall": false, "label": "Search Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62800034E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 203.66666666666666, "minX": 1.62799998E12, "maxY": 708.65, "series": [{"data": [[1.62800016E12, 708.65], [1.62800034E12, 203.66666666666666], [1.62800022E12, 678.3166666666667], [1.62800004E12, 694.2833333333333], [1.6280001E12, 696.9666666666667], [1.62799998E12, 395.23333333333335], [1.62800028E12, 695.9833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62800034E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

