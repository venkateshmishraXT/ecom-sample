# Use an official base image for Java
# FROM wiremock/wiremock:latest
FROM eclipse-temurin:11.0.20_8-jre

# Set the working directory in the container
WORKDIR /app

# Copy your WireMock configuration files to the container
# COPY ./wiremock/__files /wiremock/__files
# COPY ./wiremock/mappings /wiremock/mappings
COPY wiremock/* /app
RUN chmod +x /app/start.sh
RUN ls -ltr /app
# Expose the WireMock port
EXPOSE 3001 3002
CMD [ "/app/start.sh" ]