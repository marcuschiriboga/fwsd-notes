import createError from 'http-errors';
import express from "express"
import path from 'path'
import cookieParser from 'cookie-parser';
import logger from 'morgan'
import mongoose from 'mongoose';
import indexRouter from './routes/index'
import usersRouter from './routes/users'
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


mongoose.connect('mongodb+srv://marcus:BL7m7mRbOeIzQYbL@cluster0.m351zy0.mongodb.net/snippets?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(_ => console.log("[Database] Connection established"))
  .catch(err => console.log("[Database] Connection failed:", err))


// https://stackoverflow.com/questions/77020141/how-to-fix-access-has-been-blocked-by-cors-policy-in-react-node-js-application
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
