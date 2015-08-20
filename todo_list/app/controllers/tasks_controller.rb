class TasksController < ApplicationController
  def index
    @tasks = Task.all
    render json: @tasks
  end

  def show
    @task = Task.find(params[:id])
    render json: @task
  end

  def create
    p task_params
    @task = Task.create(task_params)
    render json: @task
  end

  def update
  end

  def destroy
  end

  private

  def task_params
    params.permit(:body)
  end
end
