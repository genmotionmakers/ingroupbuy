import 'package:flutter/material.dart';
import 'package:prohumanhacks/animations/ScaleRoute.dart';
import 'package:prohumanhacks/widgets/BottomNavBarWidget.dart';
import 'package:prohumanhacks/widgets/SearchWidget.dart';
import 'package:prohumanhacks/widgets/ShoppingList.dart';
import 'package:prohumanhacks/services/Group.dart';

import 'SignInPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  MyDropDown dropDownGroup = new MyDropDown();
  bool loading = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color(0xFFFAFAFA),
        elevation: 0,
        title: SearchWidget(onSubmitSearch: (search) => {searchGroup(search)}),
        brightness: Brightness.light,
        actions: <Widget>[
          IconButton(
              icon: Icon(
                Icons.notifications_none,
                color: Color(0xFF3a3737),
              ),
              onPressed: () {
                Navigator.push(context, ScaleRoute(page: SignInPage()));
              })
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            // Too pages
            dropDownGroup,
            ShoppingList(),
            ShoppingList(),
            ShoppingList()
          ],
        ),
      ),
      bottomNavigationBar: BottomNavBarWidget(),
    );
  }

  /// Realiza la busqueda de acuerdo al texto que se pasa en [search]
  void searchGroup(String search) {
    Group()
        .getGroups()
        .then((_groups) => {
              dropDownGroup.changeState(
                  grupos: _groups, selected: _groups[0].id),
            })
        .catchError((error) => {
              print(error.toString()),
            });
  }
}

class MyDropDown extends StatefulWidget {
  final _MyDropDownState _state = _MyDropDownState();

  MyDropDown({
    Key key,
  }) : super(key: key);

  @override
  State createState() => _state;

  /// Actualiza el estado del widget
  changeState({List<IGroup> grupos, String selected}) {
    _state.changeState(grupos: grupos, selected: selected);
  }
}

class _MyDropDownState extends State<MyDropDown> {
  String _selected;
  List<IGroup> _grupos = new List<IGroup>();

  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: EdgeInsets.only(left: 10, top: 8, right: 10, bottom: 5),
        child: DropdownButtonFormField<String>(
          decoration: new InputDecoration(
            isDense: true,
            alignLabelWithHint: true,
            hintStyle: new TextStyle(
                color: Color(0xFFd0cece),
                fontSize: 16,
                fontFamily: 'tahoma',
                decorationStyle: TextDecorationStyle.solid),
            hintText: "Seleccione un Grupo",
            border: OutlineInputBorder(
              borderSide: BorderSide(
                width: 1,
                color: Color(0xFFfb3132),
                style: BorderStyle.solid,
              ),
            ),
          ),
          value: _selected,
          items: _grupos
              .map((group) => DropdownMenuItem(
                    child: Text(group.name),
                    value: group.id,
                  ))
              .toList(),
          onChanged: (value) {
            setState(() => _selected = value);
          },
        ));
  }

  /// Actualiza el estado del widget
  changeState({List<IGroup> grupos, String selected}) {
    setState(() {
      /// Si se actualizaron los grupos
      if (selected != null) _grupos = grupos;

      /// Si se actualizo el item seleccionado
      if (selected != null) _selected = selected;
    });
  }
}
