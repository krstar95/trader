# Trader App

Trader is a one-page React-Redux-RxJS-WebSocket app that utilizes the web, mq, and mds services.

Makefile installs node modules, generates the protobuf files, and builds an optimized webpack configuration to prepare for production Docker container image build.

# Local Development

This doc needs update.  I don't know if npm watch works.

For local development you probably want to run the watcher in the background along with Django.  You can do this with bash job control from a single shell if you prefer.  Note that sometimes `npm run watch` will enter an unrecoverable (?) high CPU load condition and may need to be stopped and restarted.  Nevertheless...

After running make at least once you can run the watcher.

```
$ ../manage.py runserver &
$ npm run watch &
...
```

Django app has its own Makefile so you should have also run make in the parent directory at least once to generate I18N/L10N files and other things for the host web app.  Although Trader is a single page React app it runs in the context of a Django app.
