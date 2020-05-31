import 'package:flutter/material.dart';

class ShoppingList extends StatefulWidget {
  @override
  _ShoppingListState createState() => _ShoppingListState();
}

class _ShoppingListState extends State<ShoppingList> {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 150,
      width: 600,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: <Widget>[
          ShoppingListTiles(name: "Pasta", imageUrl: "ic_pasta", slug: ""),
          ShoppingListTiles(name: "Arroz", imageUrl: "ic_arroz", slug: ""),
          ShoppingListTiles(name: "Arroz", imageUrl: "ic_arroz", slug: ""),
        ],
      ),
    );
  }
}

class ShoppingListTiles extends StatelessWidget {
  String name;
  String imageUrl;
  String slug;

  ShoppingListTiles(
      {Key key,
        @required this.name,
        @required this.imageUrl,
        @required this.slug})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {},
      child: Column(
        children: <Widget>[
          Container(
            padding: EdgeInsets.only(left: 10, right: 5, top: 5, bottom: 5),
            decoration: new BoxDecoration(boxShadow: [
              new BoxShadow(
                color: Color(0xFFfae3e2),
                blurRadius: 25.0,
                offset: Offset(0.0, 0.75),
              ),
            ]),
            child: Card(
                color: Colors.white,
                elevation: 0,
                shape: RoundedRectangleBorder(
                  borderRadius: const BorderRadius.all(
                    Radius.circular(3.0),
                  ),
                ),
                child: Container(
                  width: 100,
                  height: 100,
                  child: Column(
                    children: <Widget>[
                      Center(
                          child: Image.asset(
                            'assets/images/shoplist/' + imageUrl + ".jpg",
                            width: 100,
                            height: 70,
                          )),
                      Center(
                        child: Image.asset('assets/images/start.png',
                        width: 50,
                        height: 30,)
                      )

                    ]),
                )),
          ),
          Text(name,
              style: TextStyle(
                  color: Color(0xFF6e6e71),
                  fontSize: 14,
                  fontWeight: FontWeight.w400)),
        ],
      ),
    );
  }
}