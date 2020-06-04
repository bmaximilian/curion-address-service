FROM node:12.16.1

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# COPY package.json /opt/app/package.json
# COPY package-lock.json /opt/app/package-lock.json

# copy project source code
COPY --chown=node:node . /opt/app

USER node

# install project dependencies
WORKDIR /opt/app
RUN NODE_ENV=development npm install && npm cache clean --force
ENV PATH /opt/app/node_modules/.bin:$PATH

# actually build sources for production
RUN test "$NODE_ENV" = production && npm run build -- --prod || echo "skipping build for dev"

EXPOSE 4200

# start the node application
CMD [ "npm", "start" ]
