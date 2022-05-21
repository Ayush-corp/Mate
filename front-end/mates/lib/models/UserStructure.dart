class UserStructure {
  final int id;
  final String name;
  final String email;

  const UserStructure({
    required this.id,
    required this.name,
    required this.email,
  });

  factory UserStructure.fromJson(Map<String, dynamic> json) {
    return UserStructure(
      id: json['id'],
      name: json['name'],
      email: json['email'],
    );
  }
}
