import numpy as np
import pandas as pd
import yfinance as yf
import tensorflow as tf
import matplotlib.pyplot as plt
import streamlit as st
from keras.models import load_model
from sklearn.metrics import r2_score
from sklearn.preprocessing import StandardScaler
scaler=StandardScaler()

st.title("Stock Prediction")


#===============================================Selecting DataSet================================================================

form = st.form(key='Ticker')
dataset = form.selectbox(
    'Select the DataSet',
    options=['AAPL', 'ADANIPORTS.NS'])
ticker_button = form.form_submit_button(label='Submit')

st.write('DataSet Of ', dataset)

#===============================================Loading DataSet and Model==========================================================

if dataset == 'AAPL':
  df=pd.read_csv('Dataset/AAPL.csv')
  modelLstm = load_model('Models/model_LSTM_AAPL.h5')
  modelCnn = load_model('Models/model_CNN_AAPL.h5')

elif dataset == 'ADANIPORTS.NS':
  df=pd.read_csv('Dataset/ADANIPORTS.NS.csv')
  modelLstm = load_model('Models/model_LSTM_ADA.h5')
  modelCnn = load_model('Models/model_CNN_AAPL.h5')

st.write(df.tail())

#==============================================================Spliting Data===========================================================

data_training=pd.DataFrame(df['Close'][0:int(len(df)*0.8)])
data_testing=pd.DataFrame(df['Close'][int(len(df)*0.8):int(len(df))])

input_data=scaler.fit_transform(data_testing)

x_test=[]
y_test=[]
for i in range(100,input_data.shape[0]):
    x_test.append(input_data[i-100:i])

    y_test.append(input_data[i,0])

x_test,y_test=np.array(x_test),np.array(y_test)

#=========================================================Predict Values from Trained Model============================================

y_predictCnn = modelCnn.predict(x_test)
y_predictLstm = modelLstm.predict(x_test)

y_predictCnn =scaler.inverse_transform(y_predictCnn)
y_predictLstm =scaler.inverse_transform(y_predictLstm)

y_trail=y_test.reshape(-1,1)
y_trail=scaler.inverse_transform(y_trail)

font1 = {'family':'serif','color':'black','size':25}
font2 = {'family':'serif','color':'brown','size':20}

#=======================================================Ploting graph with Predict values using CNN model ================================

st.subheader('Predict Graph CNN('+ dataset+')')
figCnn = plt.figure(figsize=(12,6))
plt.plot(y_trail,'r')
plt.plot(y_predictCnn,'b')
plt.legend(['Actual Test Data', 'CNN Predict Data'], loc ="lower right")
st.pyplot(figCnn)


#=======================================================Ploting graph with Predict values using LSTM model ================================

st.subheader('Predict Graph LSTM('+ dataset+')')
figLstm = plt.figure(figsize=(12,6))
plt.plot(y_trail,'r')
plt.plot(y_predictLstm,'b')
plt.legend(['Actual Test Data', 'LSTM Predict Data'], loc ="lower right")
st.pyplot(figLstm)

#=======================================================Ploting graph with using CNN and LSTM  model ================================

st.subheader('Comparing LSTM, CNN model Graph('+ dataset+')')
figLstm = plt.figure(figsize=(12,6))
plt.plot(y_predictLstm,'r')
plt.plot(y_predictCnn,'b')
plt.legend(['LSTM Predict Data', 'CNN Predict Data'], loc ="lower right")
st.pyplot(figLstm)

#================================================Ploting Table with using Test Data, CNN and LSTM model ================================

st.subheader('Predict Values from CNN, LSTM And Test Data('+ dataset+')')
table =  pd.DataFrame(y_trail,columns=["Test Data"]).join(pd.DataFrame(y_predictCnn,columns=["CNN predicted"]))  
table = table.join(pd.DataFrame(y_predictLstm,columns=["LSTM predicted"]))
st.write(table)

#===============================================Finding Accuracy Value=======================================================================================

cnnScore = r2_score(y_trail, y_predictCnn)
lstmScore = r2_score(y_trail, y_predictLstm)
st.subheader( 'Accuracy Values for CNN Model('+ dataset+') : '+str(cnnScore))
st.subheader('Accuracy Values for LSTM Model('+ dataset+') : '+str(lstmScore))

#====================================================End of the file===========================================================================================