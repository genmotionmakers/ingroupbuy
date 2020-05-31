import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:prohumanhacks/Strings.dart';

class Group {
  /// Obtiene los grupos
  Future<List<IGroup>> getGroups() async {
    try {
      print(Strings.api_url);
      final response = await http.get(
          Strings.api_url + '/groups/8.737365320979848,-75.87728043124469');

      /// Si fue exitoso
      if (response.statusCode == 200) {
        return IGroup().getJson(json.decode(response.body));
      } else {
        throw Exception(response.body);
      }
    } catch (e) {
      throw Exception('Failed to load groups... ' + e.toString());
    }
  }
}

class IGroup {
  final String id;
  final String name;
  final String coords;
  final int distance;

  IGroup({this.id, this.name, this.coords, this.distance});

  List<IGroup> getJson(List<dynamic> json) {
    List<IGroup> grupos = new List<IGroup>();

    /// Recorre el map
    for (var item in json) {
      if (item != null) {
        grupos.add(IGroup(
            id: item['_id'],
            name: item['name'],
            coords: item['coords'],
            distance: item['distance']));
      }
    }

    return grupos;
  }
}
