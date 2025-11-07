
FROM maven:3.9.6-eclipse-temurin-17-alpine AS backend-build
WORKDIR /app
COPY backend/pom.xml ./backend/
COPY backend/.mvn ./backend/.mvn
COPY backend/mvnw ./backend/
COPY backend/mvnw.cmd ./backend/

COPY backend/src ./backend/src

RUN cd backend && mvn package -DskipTests

FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

EXPOSE 8080

ARG JAR_FILENAME=email-writer-0.0.1-SNAPSHOT.jar
ARG JAR_PATH=backend/target/${JAR_FILENAME}

COPY --from=backend-build /app/${JAR_PATH} app.jar

ENV SERVER_PORT=8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]