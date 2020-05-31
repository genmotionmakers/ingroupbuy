import 'package:flutter/material.dart';
import 'package:prohumanhacks/animations/ScaleRoute.dart';
import 'package:prohumanhacks/widgets/BottomNavBarWidget.dart';
import 'package:prohumanhacks/widgets/SearchWidget.dart';
import 'package:prohumanhacks/widgets/ShoppingList.dart';

import 'SignInPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(

          backgroundColor: Color(0xFFFAFAFA),
          elevation: 0,

          title:  DropdownButton<String>(
            items: <String>['A', 'B', 'C', 'D'].map((String value) {
              return new DropdownMenuItem<String>(
                value: value,
                child: new Text(value),
              );
            }).toList(),
            onChanged: (_) {},
          ),
          brightness: Brightness.light,
          actions: <Widget>[
            IconButton(
                icon: Icon(
                  Icons.notifications_none,
                  color: Color(0xFF3a3737),
                ),onPressed: () {Navigator.push(context, ScaleRoute(page: SignInPage()));})

      ],
        ),
        body: SingleChildScrollView(
          child: Column(
            children: <Widget>[
            // Too pages
              SearchWidget(),
              ShoppingList(),
              ShoppingList(),
              ShoppingList()
            ],
          ),
        ),
        bottomNavigationBar: BottomNavBarWidget(),
      );
    }

  }
