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
          title: Text(
            "You Buy we help",
            style: TextStyle(
                color: Color(0xFF3a3737),
                fontSize: 16,
                fontWeight: FontWeight.w500),
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
            // Too add widgets
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
