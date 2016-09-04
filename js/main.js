"use strict";

// Массив данных
var data = {
  "Варёные": {
    "Пример: Докторская": {
      "Фото": "http://newsprom.ru/i/n/693/209693/tn_209693_1253a27436a5.jpg",
      "Цена в рублях": 600.00
    }
  },
  "Варёно-копчёные": {
    "Пример: Краковская": {
      "Фото": "http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/sausage-25.jpg",
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
