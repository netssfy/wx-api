IF "%JAVA_HOME%"=="" ECHO JAVA_HOME is NOT defined && exit

call mvn clean package

call docker build -t netssfy/tb-wx-api:latest .
call docker image push netssfy/tb-wx-api:latest