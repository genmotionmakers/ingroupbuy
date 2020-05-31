import 'package:flutter/material.dart';

class SearchWidget extends StatelessWidget {
  final ValueChanged<String>
      onSubmitSearch; // Evento al hacer búsqueda de contenido

  SearchWidget({this.onSubmitSearch});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(left: 0, top: 0, right: 0, bottom: 0),
      child: TextField(
        onSubmitted: (text) {
          this.onSubmitSearch(text);
        },
        decoration: InputDecoration(
          filled: true,
          prefixIcon: Icon(
            Icons.search,
            color: Color(0xFFfb3132),
          ),
          fillColor: Color(0xFFFAFAFA),
          suffixIcon: Icon(
            Icons.sort,
            color: Color(0xFFfb3132),
          ),
          hintStyle: new TextStyle(color: Color(0xFFd0cece), fontSize: 18),
          hintText: "Search something",
        ),
      ),
    );
  }
}
