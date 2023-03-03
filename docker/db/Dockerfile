FROM postgres:15.1
LABEL 'MAINTAINER' = 'Oleg V. Ivantsov, email: o.v.ivantsov@gmail.com'

RUN localedef -i ru_RU -c -f UTF-8 -A /usr/share/locale/locale.alias ru_RU.UTF-8

RUN apt-get update -y && apt-get install -y \
    postgresql-contrib-15 \
    tzdata