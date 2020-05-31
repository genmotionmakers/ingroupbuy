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
    String _selectedText = "A";
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(

          backgroundColor: Color(0xFFFAFAFA),
          elevation: 0,

          title:new MyDropDown(),
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



class MyDropDown extends StatefulWidget {
  const MyDropDown({
    Key key,
  }) : super(key: key);

  @override
  _MyDropDownState createState() => _MyDropDownState();
}

class _MyDropDownState extends State<MyDropDown> {
  String selected;
  @override
  Widget build(BuildContext context) {
    return DropdownButtonFormField<String>(
      value: selected,
      items: ["A", "B", "C"]
          .map((label) => DropdownMenuItem(
        child: Text(label),
        value: label,
      ))
          .toList(),
      onChanged: (value) {
        setState(() => selected = value);
      },
    );
  }
}
