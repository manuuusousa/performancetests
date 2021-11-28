# README #

This README documents whatever steps are necessary to get the performance tests up and running!

### What is this repository for? ###

* Quick summary
This repository contains the performance tests configurations to create, maintain and run load tests on JMeter tool. Also, it sets the grafana-influxdb-docker environment to monitor the test execution in real-time.

* Version
1.0


### Folders' structure ###
    
    test [test folder]
        performance [performance tests folder]
            application [where the performance tests `.jmx` files are located]
            infrastructure [contains the setup of docker, grafana and influxdb]
                grafana
                influxdb
            report [keeps all the test execution reports `.jtl` files and the apdex files (check section `How to generate the Apdex report`)]
                apdex
            test-data [contains the test data used as input and keeps the registry of all output data generated for each request]
                input
                output

### How do I get set up? ###

* Summary of set up
    * Java
    Version: openjdk version "1.8.0_242"

    * Docker
    Version: latest

    * JMeter 
    Version: 5.4.1
    Download: https://jmeter.apache.org/download_jmeter.cgi
    Binary: apache-jmeter-5.4.1.tgz
    
    * JMeter Plugins: 
    Download the plugins JAR files and put them into JMeter's [lib/ext] folder
    - jmeter-plugins-manager-1.6.jar 
        - https://jmeter-plugins.org/wiki/PluginsManager/
    - JMeter-InfluxDB-Writer-plugin-1.2.jar 
        - https://github.com/NovatecConsulting/JMeter-InfluxDB-Writer/releases/tag/v-1.2
    - Open JMeter UI with the following command on JMeter's [/bin] folder
        - `./jmeter.sh`
    - Open any [.jmx] file in JMeter's UI (for example the `starship_performance_test.jmx`)
        - Install any other plugins JMeter suggests when openning the test in the UI
   
    * VSCode Plugins
        - Install Rainbow CSV
        - Edit csv [janisdd.vscode-edit-csv]
    
* Configuration
    * To enable Grafana-Influx run
        On test/performance/infrastructure folder -> run `make`

* Other useful commands
    * To enable Grafana-Influx run
    On test/performance/infrastructure folder -> run `docker-compose up -d` 

    * To disable Grafana-Influx run
    On test/performance/infrastructure folder -> run `docker-compose down` 

    * To force build/rebuild docker image
    On test/performance/infrastructure folder -> run `docker-compose up --build` or `docker-compose up --force-recreate` 

    * To remove all docker images and volumes
    To remove:
        - all stopped containers
        - all networks not used by at least one container
        - all images without at least one container associated to them
        - all build cache
        On test/perf/infrastructure folder -> run `docker system prune --all`

    * To remove: 
        - all local volumes not used by at least one container.
        On test/perf/infrastructure folder -> run `docker volume prune`

    * Grafana url
    http://localhost:3000/          
    
    1. Data source created: influxdbStarships
    2. Http url: http://influxdb:8086
    3. Database set: influxJMeterStarships
    4. Dashboard created on `Grafana>Dashboards>Manage`: Performance/ ** Starships ** - JMeter Dashboard
    
*  How to run tests
    Don't use GUI mode for load testing !, only for Test creation and Test debugging.
    Find on `test/performance/application` the test file [.jmx] you want to run
    To run tests use CLI Mode (was NON GUI):
        - On JMeter /bin folder run the command below:
            - `./jmeter.sh -n -t [jmx file]`

* How to generate the Apdex report
    Find on `test/performance/report` the report file [.jtl] you want to generate the Apdex report
    On JMeter `/bin` folder run the command below:
            - `./jmeter.sh -g [jtl file] -o [path to Apdex report folder]`