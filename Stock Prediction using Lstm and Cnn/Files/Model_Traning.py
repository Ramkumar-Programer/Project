import numpy as np
import pandas as pd
import streamlit as st
import tensorflow as tf
import matplotlib.pyplot as plt
from keras.callbacks import Callback
from sklearn.preprocessing import StandardScaler
from keras.layers import Conv1D, LSTM, GRU, Dense, Dropout, Bidirectional,MaxPooling1D,Flatten

st.title("Stock Prediction")

st.container()

#===================================Selecting DataSet ===============================================================
form = st.form(key='Ticker')
dataset = form.selectbox(
    'Select the DataSet',
    options=['AAPL', 'ADANIPORTS.NS'])
ticker_button = form.form_submit_button(label='Submit')

if ticker_button == True:
  st.write('DataSet Of ', dataset)

  #===================================Loading DataSet ===============================================================
  if dataset == 'AAPL':
    df=pd.read_csv('Dataset/AAPL.csv')
    datasetName = 'AAPL'

  elif dataset == 'ADANIPORTS.NS':
    df=pd.read_csv('Dataset/ADANIPORTS.NS.csv')
    datasetName = 'ADA'

  st.write(df.tail())

  df.dropna(inplace=True)

  df=df.reset_index()

  #===============================Ploting Graph of Closing Price=======================================================

  st.subheader("Closing Price vs Time Chart")
  fig = plt.figure(figsize=(12,6))
  plt.plot(df.Close)
  st.pyplot(fig)

  #=========================================Data spliting========================================================
  data_training=pd.DataFrame(df['Close'][0:int(len(df)*0.8)])
  data_testing=pd.DataFrame(df['Close'][int(len(df)*0.8):int(len(df))])

  print(data_training.shape)
  print(data_testing.shape)

  #========================================Data Preprocessing========================================================

  scaler=StandardScaler()

  data_training_array=scaler.fit_transform(data_training)

  x_train=[]
  y_train=[]
  for i in range(100,data_training_array.shape[0]):
    x_train.append(data_training_array[i-100:i])
    y_train.append(data_training_array[i,0])
  x_train,y_train=np.array(x_train),np.array(y_train)

  #====================================================Traning Cnn Model =======================================================

  st.subheader("Started for traning CNN model")
  prgCnn = st.progress(1)

  class EpochCounterCnn(Callback):
    def on_epoch_end(self, epoch, logs=None):
      prgCnn.progress((epoch+1)*5)

  #=====================Applying algorithm ===========================================

  modelCnn = tf.keras.Sequential()

  modelCnn.add(Conv1D(64, kernel_size=3, activation="relu", input_shape=(100, 1)))
  modelCnn.add(Conv1D(128, kernel_size=3, activation="relu"))
  modelCnn.add(Conv1D(64, kernel_size=3, activation="relu"))
  modelCnn.add(MaxPooling1D(2))

  #modelCnn.add(Bidirectional(GRU(100, return_sequences=False)))

  modelCnn.add(Dropout(0.5))

  #Final Layer
  modelCnn.add(Dense(1, activation ="linear"))

  #===================Compiling Cnn model ============================
  
  modelCnn.compile(optimizer='adam', loss='mean_squared_error', metrics=['mean_squared_error', 'mean_absolute_error'])
  historyCnn = modelCnn.fit(x_train,y_train,epochs=20, batch_size=32, callbacks=[EpochCounterCnn()])
  
  if len(historyCnn.history['loss']) == 20:
    st.success('Training CNN Model completed successfully!', icon="✅")
  else:
    print("Training CNN Model did not complete successfully")

  CnnMse = historyCnn.history['mean_squared_error']
  CnnMae = historyCnn.history['mean_absolute_error']

  #====================Printing MSE and MAE Value ========================

  #st.subheader(historyCnn.history['mean_squared_error'])
  #st.subheader(historyCnn.history['mean_absolute_error'])
  epochs = range(1, len(CnnMse) + 1)

  #====================Ploting Graph of MSE and MAE Value =====================

  figCnn = plt.figure(figsize=(12,6))
  plt.plot(epochs, CnnMse, 'b', label='MSE')
  plt.plot(epochs, CnnMae, 'r', label='MAE')
  plt.title('Training and Validation MSE/MAE')
  plt.xlabel('Epochs')
  plt.ylabel('Loss')
  plt.legend()
  st.pyplot(figCnn)


   #====================================================Traning Lstm Model =======================================================

  st.subheader("Started for traning LSTM model")
  prgLstm = st.progress(1)

  class EpochCounterLstm(Callback):
    def on_epoch_end(self, epoch, logs=None):
      prgLstm.progress((epoch+1)*5)

  #=====================Applying algorithm ===========================================

  modelLstm = tf.keras.Sequential()

  modelLstm.add(LSTM(units=50,activation='relu',return_sequences=True,
               input_shape=(100,1)))
  modelLstm.add(Dropout(0.2))

  modelLstm.add(LSTM(units=60,activation='relu',return_sequences=True))
  modelLstm.add(Dropout(0.3))

  modelLstm.add(LSTM(units=80,activation='relu',return_sequences=True))
  modelLstm.add(Dropout(0.4))

  modelLstm.add(LSTM(units=120,activation='relu'))
  modelLstm.add(Dropout(0.5))

  #===================Compiling Lstm model ============================

  modelLstm.add(Dense(1))
  modelLstm.compile(optimizer='adam', loss='mean_squared_error', metrics=['mean_squared_error', 'mean_absolute_error'])

  historyLstm = modelLstm.fit(x_train,y_train,epochs=20, batch_size=32, callbacks=[EpochCounterLstm()])

  #st.subheader(historyLstm.history['mean_squared_error'])
  #st.subheader(historyLstm.history['mean_absolute_error'])

  if len(historyLstm.history['loss']) == 20:
    st.success('Training LSTM Model completed successfully!', icon="✅")
  else:
    print("Training LSTM Model did not complete successfully")

  #====================Printing MSE and MAE Value ========================

  LstmMse = historyCnn.history['mean_squared_error']
  LstmMae = historyCnn.history['mean_absolute_error']
  epochs = range(1, len(LstmMse) + 1)

  #====================Ploting Graph of MSE and MAE Value =====================

  figCnn = plt.figure(figsize=(12,6))
  plt.plot(epochs, LstmMse, 'b', label='MSE')
  plt.plot(epochs, LstmMae, 'r', label='MAE')
  plt.title('Training and Validation MSE/MAE')
  plt.xlabel('Epochs')
  plt.ylabel('Loss')
  plt.legend()
  st.pyplot(figCnn)
 
  #===========================================Saving model ============================================================================

  #modelCnn.save('Trained_Models\model_CNN_'+datasetName+'.h5')
  #modelLstm.save('Trained_Models\model_LSTM_'+datasetName+'.h5')
  #modelCnnLstm.save('Trained_Models\model_LSTM_Cnn_'+datasetName+'.h5')

#================================================End of model Training file===============================================================