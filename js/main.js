"use strict";

// Массив данных
var data = {
  "Варёные": {
    "Пример": {
      "Фото": "http://placehold.it/150x150",
      "Цена в рублях": 600.00
    }
  },
  "Варёно-копчёные": {
    "Пример": {
      "Фото": "http://placehold.it/200x150",
      "Цена в рублях": 299.99,
      "Скидка": 5
    }
  },
  "Твёрдого копчения": {},
  "Деликатесы": {},
  "“Рога и копыта”": {}
};

// Ниже само приложение
var categories = angular.module('Categories', []);
categories.controller('CategoriesController', function ($scope) {
  // Создаем хранилище данных для фильтров
  $scope.filters = {};

  // Загружаем в контроллер базу
  $scope.data = data;

  // Заносим в список категории из базы
  $scope.filters.categories = [];
  for (var category in data) {
    $scope.filters.categories.push(category);
  }

  // Логика для фильтра по категории
  $scope.selected = 0;
  $scope.select = function (index) {
    $scope.selected = index;
  };
});
