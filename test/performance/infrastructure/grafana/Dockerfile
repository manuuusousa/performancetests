FROM grafana/grafana:7.0.0-beta3-ubuntu
USER root
RUN apt-get update && apt-get install -y curl gettext-base && rm -rf /var/lib/apt/lists/*

WORKDIR /grafana
ADD ./datasources /etc/grafana/datasources
ADD ./provisioning /etc/grafana/provisioning/dashboards
ADD ./dashboards /var/lib/grafana/dashboards

WORKDIR /app
COPY entrypoint.sh ./
RUN chmod u+x entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]
