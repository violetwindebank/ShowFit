Feature('cookies');

Before(({I, acceptAllCookies}) => { 

    I.amOnPage('https://showme.fit/');
    I.wait(5)

    acceptAllCookies.sendForm()

  });

Scenario('test something', ({ I }) => {


    I.wait(5)
   
    I.wait(5)

});
