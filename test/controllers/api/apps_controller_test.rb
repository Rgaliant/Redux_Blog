require 'test_helper'

class Api::AppsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_apps_index_url
    assert_response :success
  end

  test "should get show" do
    get api_apps_show_url
    assert_response :success
  end

  test "should get create" do
    get api_apps_create_url
    assert_response :success
  end

  test "should get update" do
    get api_apps_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_apps_destroy_url
    assert_response :success
  end

end
