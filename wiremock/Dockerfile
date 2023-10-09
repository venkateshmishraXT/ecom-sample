# Use an official base image for Java
FROM wiremock/wiremock:latest

# Set the working directory in the container
WORKDIR /wiremock

# Copy your WireMock configuration files to the container
COPY ./wiremock/__files /wiremock/__files
COPY ./wiremock/mappings /wiremock/mappings

# Expose the WireMock port
EXPOSE 3001
