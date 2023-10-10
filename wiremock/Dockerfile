# Use an official base image for Java
FROM wiremock/wiremock:latest
#FROM eclipse-temurin:11.0.20_8-jre

# Set the working directory in the container
WORKDIR /wiremock

# Copy your WireMock configuration files to the container
# COPY ./wiremock/__files /wiremock/__files
# COPY ./wiremock/mappings /wiremock/mappings
COPY . .
RUN chmod +x /wiremock/start.sh
RUN ls -ltr /wiremock
# Expose the WireMock port
EXPOSE 3001 3002
CMD [ "/wiremock/start.sh" ]